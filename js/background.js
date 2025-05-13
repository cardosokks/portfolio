window.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('background-container');
  
    const imageList = [
      'images/bg/img1.png',
      'images/bg/img2.png',
      'images/bg/img3.png',
      'images/bg/img4.png'
    ];
  
    const total = 30;
  
    for (let i = 0; i < total; i++) {
      const img = document.createElement('img');
      
      // Escolher imagem aleatória da lista
      const randomImage = imageList[Math.floor(Math.random() * imageList.length)];
      img.src = randomImage;
  
      img.className = 'bg-image';
  
      const size = Math.random() * 40 + 20;
      img.style.width = `${size}px`;
      img.style.height = `${size}px`;
  
      img.style.left = `${Math.random() * 100}%`;
      img.style.top = `${Math.random() * 100}%`;
  
      img.style.animationDuration = `${Math.random() * 20 + 5}s`;
      img.style.animationDelay = `${Math.random() * 5}s`;
  
      container.appendChild(img);
    }
  });
  