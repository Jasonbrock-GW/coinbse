document.addEventListener('DOMContentLoaded', function() {
    // Tab Switching Functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Get the tab id and activate corresponding content
            const tabId = button.id;
            const contentClass = tabId.replace('tab--', '') + '-content';
            document.querySelector(`.${contentClass}`).classList.add('active');
        });
    });

    // Modal Functionality
    const connectBtn = document.querySelector('.connect-btn');
    const createWalletBtn = document.querySelector('.create-wallet-btn');
    const connectModal = document.getElementById('connect-modal');

    // Show modal when connect button is clicked
    if (connectBtn) {
        connectBtn.addEventListener('click', () => {
            connectModal.style.display = 'flex';
        });
    }

    // Show modal when create wallet button is clicked
    if (createWalletBtn) {
        createWalletBtn.addEventListener('click', () => {
            connectModal.style.display = 'flex';
        });
    }

    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target === connectModal) {
            connectModal.style.display = 'none';
        }
    });

    // Cookie Notice Functionality
    const cookieNotice = document.querySelector('.cookie-notice');
    const dismissBtn = document.querySelector('.dismiss-btn');

    if (dismissBtn) {
        dismissBtn.addEventListener('click', () => {
            cookieNotice.style.display = 'none';
            // In a real implementation, we would set a cookie to remember this choice
            localStorage.setItem('cookieNoticeDismissed', 'true');
        });
    }

    // Check if cookie notice was previously dismissed
    if (localStorage.getItem('cookieNoticeDismissed') === 'true') {
        cookieNotice.style.display = 'none';
    }

    // Create Mint and Create Gallery buttons
    const createMintBtn = document.querySelector('.create-mint-btn');
    const createGalleryBtn = document.querySelector('.create-gallery-btn');

    if (createMintBtn) {
        createMintBtn.addEventListener('click', () => {
            // In a real implementation, this would navigate to a mint creation page
            // For now, we'll just show the connect modal
            connectModal.style.display = 'flex';
        });
    }

    if (createGalleryBtn) {
        createGalleryBtn.addEventListener('click', () => {
            // In a real implementation, this would navigate to a gallery creation page
            // For now, we'll just show the connect modal
            connectModal.style.display = 'flex';
        });
    }

    // Wallet connection options
    const walletOptions = document.querySelectorAll('.wallet-option');
    
    walletOptions.forEach(option => {
        option.addEventListener('click', () => {
            // In a real implementation, this would initiate the wallet connection process
            // For now, we'll just log which wallet was selected
            const walletName = option.querySelector('span').textContent;
            console.log(`Connecting to ${walletName}...`);
            
            // Simulate connection process
            option.innerHTML = `<div class="wallet-icon ${walletName.toLowerCase().replace(' ', '-')}-icon"></div>
                               <span>Connecting to ${walletName}...</span>
                               <div class="loading-spinner"></div>`;
            
            // After a delay, close the modal (simulating successful connection)
            setTimeout(() => {
                connectModal.style.display = 'none';
                // In a real implementation, we would update the UI to show the connected state
            }, 2000);
        });
    });

    // Sign up button
    const signupBtn = document.querySelector('.signup-btn');
    
    if (signupBtn) {
        signupBtn.addEventListener('click', () => {
            // In a real implementation, this would navigate to a signup page
            // For now, we'll just log that signup was clicked
            console.log('Sign up clicked');
            
            // Simulate signup process
            signupBtn.innerHTML = `<i class="fa-solid fa-user"></i>
                                  <div class="btn-text">
                                      <span>Creating account...</span>
                                      <span class="btn-description">Please wait</span>
                                  </div>`;
            
            // After a delay, close the modal (simulating successful signup)
            setTimeout(() => {
                connectModal.style.display = 'none';
                // In a real implementation, we would update the UI to show the signed-in state
            }, 2000);
        });
    }

    // NFT Card Hover Effects
    const nftCards = document.querySelectorAll('.nft-card');
    
    nftCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const shareButton = card.querySelector('.share-button');
            if (shareButton) {
                shareButton.style.opacity = '1';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            const shareButton = card.querySelector('.share-button');
            if (shareButton) {
                shareButton.style.opacity = '0';
            }
        });
    });

    // Share buttons
    const shareButtons = document.querySelectorAll('.share-button');
    
    shareButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Prevent the click from bubbling up to the card
            event.stopPropagation();
            
            // In a real implementation, this would open a share dialog
            // For now, we'll just log that share was clicked
            const nftTitle = button.closest('.nft-card').querySelector('.nft-title').textContent;
            console.log(`Share clicked for ${nftTitle}`);
        });
    });

    // Mint buttons
    const mintButtons = document.querySelectorAll('.action-button');
    
    mintButtons.forEach(button => {
        button.addEventListener('click', () => {
            // In a real implementation, this would initiate the minting process
            // For now, we'll just show the connect modal
            connectModal.style.display = 'flex';
        });
    });

    // Sort dropdown
    const sortDropdown = document.querySelector('.sort-dropdown');
    
    if (sortDropdown) {
        sortDropdown.addEventListener('click', () => {
            // In a real implementation, this would open a dropdown menu
            // For now, we'll just toggle a class
            sortDropdown.classList.toggle('active');
        });
    }
});