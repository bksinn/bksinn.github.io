// bundle.config.js
module.exports = {
  bundle: {
    main: {
      scripts: [
        './assets/js/jquery-3.1.1.js',         
        './assets/js/bootstrap.min.js',
        './assets/js/owl.carousel.min.js',
        './assets/js/jquery.magnific-popup.min.js',
        './assets/js/script.js',    
      ],
      styles: [
        //   './assets/css/magnific-popup.css',
          './assets/css/style.css'
      ]          
    },
    vendor: {
      scripts: './bower_components/angular/angular.js'
    }
  },
  copy: './content/**/*.{png,svg}'
};
