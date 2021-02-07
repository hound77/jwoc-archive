//card.forEach(element => {
  //      var div = document.querySelector('div')
      
    //    div.innerHTML = div.innerHTML + `
      //  <div id="secretpeek"class="item">
  //          <img src="${element.img}" alt="loading.." style="width:100%">
    //        <h3>${element.h3}</h3>
      //      <p>${element.p}</p>
        //<footer>
          //  <a href="${element.link}"><button class="button">Link to Project</button></a>
            //<br>
            //<a href="${element.profile}"><i class="fa fa-github">${element.fa-github}</i></a>
        //</footer>
        //</div>
       //`
    //})
    console.log("Anything");
    
//Get Selected Category Data 
$(document).ready(function(){
  create_custom_dropdowns();
  $(".category-list").change(function(){
    let selectedType = this.options[this.selectedIndex].value;
    if(selectedType == "all"){
      $('.card-data').removeClass('hidden');
    }else{
      $('.card-data').addClass('hidden');
      $('.card-container div[data-category="' + selectedType + '"]').removeClass('hidden');
    }
  })
})


function create_custom_dropdowns() {
  $('select').each(function(i, select) {
    if (!$(this).next().hasClass('dropdown')) {
      $(this).after('<div class="dropdown ' + ($(this).attr('class') || '') + '" tabindex="0"> <i class="fas fa-filter filter-icon"></i><span class="current"></span><div class="list"><ul></ul></div></div>');
      var dropdown = $(this).next();
      var options = $(select).find('option');
      var selected = $(this).find('option:selected');
      dropdown.find('.current').html(selected.data('display-text') || selected.text());
      options.each(function(j, o) {
        var display = $(o).data('display-text') || '';
        dropdown.find('ul').append('<li class="option ' + ($(o).is(':selected') ? 'selected' : '') + '" data-value="' + $(o).val() + '" data-display-text="' + display + '">' + $(o).text() + '</li>');
      });
    }
  });
}

// Open/close
$(document).on('click', '.dropdown', function(event) {
  $('.dropdown').not($(this)).removeClass('open');
  $(this).toggleClass('open');
  if ($(this).hasClass('open')) {
    $(this).find('.option').attr('tabindex', 0);
    $(this).find('.selected').focus();
  } else {
    $(this).find('.option').removeAttr('tabindex');
    $(this).focus();
  }
});
// Close when clicking outside
$(document).on('click', function(event) {
  if ($(event.target).closest('.dropdown').length === 0) {
    $('.dropdown').removeClass('open');
    $('.dropdown .option').removeAttr('tabindex');
  }
  event.stopPropagation();
});
// Option click
$(document).on('click', '.dropdown .option', function(event) {
  $(this).closest('.list').find('.selected').removeClass('selected');
  $(this).addClass('selected');
  var text = $(this).data('display-text') || $(this).text();
  $(this).closest('.dropdown').find('.current').text(text);
  $(this).closest('.dropdown').prev('select').val($(this).data('value')).trigger('change');
});
