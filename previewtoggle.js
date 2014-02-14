// jQuery: do this when page has loaded
$(function () {
  
  // finde alle links in ding mit klasse barcode
  $('.barcode a')
    // wenn maus drauf oder weg, führe diese funktion aus
    .hover(togglePreview);
  
  // function zum togglen der previews
  function togglePreview() {
    
    // nummer ist der inhalt der 'data-project' eigenschaft des elementes
    var nummer = $(this).data('project');
    
    // wenn nummer gefunden
    if (nummer) {
      // finde zugehöriges preview (hat 'data-preview=nummer')
      $('#previews').find('[data-preview=' + nummer + ']')
        // füge hinzu oder entferne die klasse 'show' (jenachdem)
        .toggleClass('show');
    }
    
  }

});
