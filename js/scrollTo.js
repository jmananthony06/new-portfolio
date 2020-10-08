$('a').on('mousedown touchstart', function () {
    var goHere = $(this).data('goto')
    console.log(goHere);
    if (goHere) {
      goToObject.goJQ(goHere)
    }
  })
  
  var goToObject = {
    // Turns off the scroll while in motion
    canGo: true,
    // Detects the window height and sends screen to a point that's not flush with the top of the window (due to scrollbar)
    goJQ: function (goHere) {
      if (this.canGo) {
        this.canGo = false
        var offset = $('#' + goHere).offset()
        var windowHeight = window.innerHeight
        console.log(offset);
        window.innerWidth > 790 ? offset.top -= (windowHeight - 120) / 3 : offset.top -= (windowHeight - 90) / 3
        $('html').animate({
          scrollTop: offset.top,
          easing:"swing"
        })
        setTimeout(function () { goToObject.canGo = true }, 100)
      }
    }
  }