import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  const walletBox = document.getElementById('wallet-box');
  const copyBtn = document.getElementById('copy-btn');
  const addressElement = document.getElementById('wallet-address');
  const feedbackElement = document.getElementById('copy-feedback');

  const copyToClipboard = async () => {
    const address = addressElement?.innerText;
    if (!address) return;

    try {
      await navigator.clipboard.writeText(address);

      // Feedback animation
      if (feedbackElement) {
        feedbackElement.classList.remove('hidden');
        setTimeout(() => {
          feedbackElement.classList.add('hidden');
        }, 2000);
      }

      // Console log for debugging
      console.log('Address copied:', address);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  walletBox?.addEventListener('click', copyToClipboard);
  copyBtn?.addEventListener('click', (e) => {
    e.stopPropagation(); // Avoid double event if nested
    copyToClipboard();
  });

  // Meme Gallery Scroll
  const gallery = document.querySelector('.meme-gallery');
  const galleryArrow = document.querySelector('.gallery-arrow');

  galleryArrow?.addEventListener('click', () => {
    if (gallery) {
      // Scroll by 300px which is roughly the width of one meme plus gap
      gallery.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  });
});
