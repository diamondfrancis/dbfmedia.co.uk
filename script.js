(function($) { 
  $(function() { 
    // Toggle dropdown menu on click
    $('nav ul li a:not(:only-child)').click(function(e) {
      const dropdown = $(this).siblings('.nav-dropdown');
      dropdown.toggle();
      dropdown.attr('aria-expanded', dropdown.is(':visible'));
      $('.nav-dropdown').not(dropdown).hide().attr('aria-expanded', 'false');
      e.stopPropagation();
    });

    // Hide dropdown when clicking outside
    $('html').click(function() {
      $('.nav-dropdown').hide().attr('aria-expanded', 'false');
    });

    // Toggle mobile navigation
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
      this.classList.toggle('active');
    });
  }); 
})(jQuery);
