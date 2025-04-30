// === Persistent Gallery Storage ===
let gallery = JSON.parse(localStorage.getItem('gallery') || '[]');

function saveGallery() {
  localStorage.setItem('gallery', JSON.stringify(gallery));
}

let deviceLibrary = JSON.parse(localStorage.getItem('deviceLibrary') || '[]');

function saveDevices() {
  localStorage.setItem('deviceLibrary', JSON.stringify(deviceLibrary));
}

// Dark Mode Toggle with Persistence
document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('toggle-dark-mode');

  if (localStorage.getItem('theme') === 'dark') {
    enableDarkMode();
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      if (document.body.classList.contains('dark')) {
        disableDarkMode();
      } else {
        enableDarkMode();
      }
    });
  }

  function enableDarkMode() {
    document.body.classList.add('dark');
    document.querySelectorAll('header, footer, .home-link, .feature-detail').forEach(el => {
      el.classList.add('dark');
    });
    localStorage.setItem('theme', 'dark');
  }

  function disableDarkMode() {
    document.body.classList.remove('dark');
    document.querySelectorAll('header, footer, .home-link, .feature-detail').forEach(el => {
      el.classList.remove('dark');
    });
    localStorage.setItem('theme', 'light');
  }

  // Scroll Animation for Reveal
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length) {
    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      const revealPoint = 150;
      revealElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - revealPoint) {
          el.classList.add('active');
        } else {
          el.classList.remove('active');
        }
      });
    };
    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);
  }

  // Parallax Effect for Hero
  const hero = document.getElementById('hero');
  if (hero) {
    window.addEventListener('scroll', () => {
      let offset = window.scrollY;
      hero.style.backgroundPositionY = offset * 0.5 + 'px';
    });
  }

  // Authentication Form
  const authForm = document.getElementById('auth-form');
  if (authForm) {
    authForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const username = document.getElementById('signin-username')?.value || document.getElementById('signup-username')?.value;
      if (username) {
        alert('Welcome, ' + username + '!');
      } else {
        alert('Please enter your credentials.');
      }
    });
  }
});

// === Core Gallery App Functions ===

// 1. Upload Picture
function uploadPicture(file, metadata, callback) {
  const reader = new FileReader();
  reader.onload = function (event) {
    const newPhoto = {
      id: Date.now(),
      url: event.target.result,
      metadata: metadata,
      comments: []
    };
    gallery.push(newPhoto);
    saveGallery();
    if (callback) callback(newPhoto);
  };
  reader.readAsDataURL(file);
}

// 2. View & Sort Photos
function viewPhotos(sortBy = 'date') {
  let sortedGallery = [...gallery];
  if (sortBy === 'name') {
    sortedGallery.sort((a, b) => a.metadata.name.localeCompare(b.metadata.name));
  } else if (sortBy === 'camera') {
    sortedGallery.sort((a, b) => a.metadata.camera.localeCompare(b.metadata.camera));
  } else {
    sortedGallery.sort((a, b) => b.id - a.id);
  }
  return sortedGallery;
}

// Single Photo View Redirect
function openPhotoView(photoId) {
  localStorage.setItem('selectedPhotoId', photoId);
  window.location.href = '../pages/photo-view.html';
}

// 3. Comment System
function addComment(photoId, commentText, author) {
  const photo = gallery.find(p => p.id === photoId);
  if (photo) {
    photo.comments.push({
      id: Date.now(),
      text: commentText,
      author: author,
      timestamp: new Date().toISOString()
    });
    saveGallery();
  }
}

function getComments(photoId) {
  const photo = gallery.find(p => p.id === photoId);
  return photo ? photo.comments : [];
}

// 4. Device Library
function addDevice(type, brand, model, imageDataURL) {
  deviceLibrary.push({ type, brand, model, image: imageDataURL });
  saveDevices();
}

function handleAddDevice() {
  const type = document.getElementById('deviceType').value;
  const brand = document.getElementById('deviceBrand').value.trim();
  const model = document.getElementById('deviceModel').value.trim();
  const imageInput = document.getElementById('deviceImage');
  const file = imageInput.files[0];

  if (!brand || !model) {
    alert('Please enter both brand and model.');
    return;
  }

  if (file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      addDevice(type, brand, model, event.target.result);
      renderDevices();
    };
    reader.readAsDataURL(file);
  } else {
    addDevice(type, brand, model, null);
    renderDevices();
  }

  document.getElementById('deviceBrand').value = '';
  document.getElementById('deviceModel').value = '';
  imageInput.value = '';
}

function listDevices(typeFilter = null) {
  return typeFilter ? deviceLibrary.filter(d => d.type === typeFilter) : deviceLibrary;
}

function renderDevices() {
  const deviceGallery = document.getElementById('deviceGallery');
  deviceGallery.innerHTML = '';

  const devices = listDevices();
  devices.forEach(device => {
    const card = document.createElement('div');
    card.classList.add('device-card');
    card.innerHTML = `
      ${device.image ? `<img src="${device.image}" alt="${device.model}" style="width:100%; border-radius:8px; margin-bottom:1rem;">` : ''}
      <h3>${device.type}</h3>
      <p><strong>Brand:</strong> ${device.brand}</p>
      <p><strong>Model:</strong> ${device.model}</p>
    `;
    card.addEventListener('click', () => openPhotoView(device.id));
    deviceGallery.appendChild(card);
  });
}

// 5. Manage Your Gallery
function editPhoto(photoId, newMetadata) {
  const photo = gallery.find(p => p.id === photoId);
  if (photo) {
    photo.metadata = { ...photo.metadata, ...newMetadata };
    saveGallery();
  }
}

function deletePhoto(photoId) {
  const index = gallery.findIndex(p => p.id === photoId);
  if (index !== -1) {
    gallery.splice(index, 1);
    saveGallery();
  }
}
