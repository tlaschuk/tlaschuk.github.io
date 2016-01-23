var Footer = function()
  {
  this.__setUpdateDate()
  }

Footer.prototype.__setUpdateDate = function()
  {
  $.getJSON("https://api.github.com/repos/Tlaschuk/maple", function(data)
    {
    var date = $.format.date(data.pushed_at, "D MMMM yyyy")
    $(".footer_meta > h6:first-child").append(date)
    })
  }
