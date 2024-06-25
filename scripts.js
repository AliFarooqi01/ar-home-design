// Function to load 3D models in AR view
function loadModel(modelPath, scale, position) {
    var model = document.createElement('a-entity');
    model.setAttribute('gltf-model', modelPath);
    model.setAttribute('scale', scale);
    model.setAttribute('position', position);
    model.setAttribute('id', 'virtual-object');
    
    var scene = document.querySelector('a-scene');
    var marker = document.querySelector('a-marker');
    
    marker.appendChild(model);
  }
  
  // Function to handle user interactions
  function setupEventListeners() {
    // Example: Change model on button click
    document.getElementById('changeModelButton').addEventListener('click', function() {
      var newModelPath = 'assets/models/furniture2.gltf'; // Change to your desired model path
      var scale = '0.1 0.1 0.1';
      var position = '0 0 0';
      loadModel(newModelPath, scale, position);
    });
  }
  
  // Function to initialize the AR scene
  function initARScene() {
    // Load initial model
    var initialModelPath = 'assets/models/furniture1.gltf'; // Replace with your initial model path
    var scale = '0.1 0.1 0.1';
    var position = '0 0 0';
    loadModel(initialModelPath, scale, position);
  
    // Setup event listeners
    setupEventListeners();
  }
  
  // Call initARScene() when the page loads
  document.addEventListener('DOMContentLoaded', function() {
    initARScene();
  });
