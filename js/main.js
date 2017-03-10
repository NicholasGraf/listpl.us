





$(function() {
  
  
  //Help
  $(document).on("click", ".help", function() {
      $(".tutorial").slideToggle("slow");
    });
  
  // Close Help
  $(document).on("click", ".closehelp", function() {
      $(".tutorial").slideToggle("slow");
    });
  
  
  
  
  
  function a() {
    $(".line-number")
      .remove()
  }

  function b() {
    var a = 1;
    $(".list-item")
      .each(function() {
        $(this)
          .append('<div class="line-number">' + a++ + "</div>")
      })
  }

  function c() {
    var a = 1;
    $(".line-number")
      .each(function() {
        $(this)
          .html(a++)
      })
  }

  function d() {
    $("div")
      .hasClass("line-number") && (a(), b(), c(), $(".line-number-trigger")
        .hasClass("toggle") || $(".line-number-trigger")
        .addClass("toggle"))
  }

  function e() {
    $(".list-wrap")
      .sortable({
        handle: ".list-cat-title .list-item-icon-arrow",
        cancel: ".list-item-remove",
        placeholder: "list-item-blank",
        axis: "y",
        revert: !0,
        stop: function() {
          var a = 1;
          $(".line-number")
            .each(function() {
              $(this)
                .html(a++)
            })
        }
      })
  }

  function f() {
    $(".list")
      .sortable({
        handle: ".list-item-icon-arrow",
        cancel: ".list-item-content",
        placeholder: "list-item-blank",
        axis: "y",
        revert: !0,
        connectWith: ".list",
        stop: function() {
          var a = 1;
          $(".line-number")
            .each(function() {
              $(this)
                .html(a++)
            })
        }
      })
  }

  function g() {
    $(".list-item-icon-remove")
      .hasClass("list-item-remove") ? ($(".list-cat-title .list-item-remove")
        .removeClass("list-item-remove")
        .addClass("remove-cat"), $(".list-item .list-item-remove")
        .removeClass("list-item-remove")
        .addClass("remove-item"), $(".delete-list-check")
        .removeClass("delete-list-check")
        .addClass("delete-localstorage")) : ($(".list-cat-title .remove-cat")
        .removeClass("remove-cat")
        .addClass("list-item-remove"), $(".list-item .remove-item")
        .removeClass("remove-item")
        .addClass("list-item-remove"), $(".delete-localstorage")
        .removeClass("delete-localstorage")
        .addClass("delete-list-check"))
  }

  function h() {
    var a = $(".list-wrap").html();
    localStorage.setItem("listplus", a)
  }
  $(".list-wrap")
    .on("click", ".list-item-icon-menu", function() {
      $(this)
        .parent()
        .next(".list")
        .slideToggle(), $(this)
        .parent()
        .find(".list-item-icon-menu")
        .toggleClass("list-item-rotate-180")
    }), $("body")
    .on("click", ".list-item-icon-settings", function() {
      var a = $(this)
        .parent();
      $(".list-item-settings")
        .not(a)
        .removeClass("toggle"), a.toggleClass("toggle")
    }), $(".list-cat-add")
    .click(function() {
      $(".list-wrap")
        .append('<div class="list-cat"><div class="list-cat-title bg-d-grey"><div class="list-item-icon-add list-item-add" title="Add"></div><div class="list-item-settings bg-d-grey"><div class="list-item-icon-settings" title="Settings"></div><div class="list-item-icon-color" title="Color"></div><div class="list-item-icon-arrow" title="Sort"></div><div class="list-item-icon-remove list-item-remove" title="Remove"></div></div><div class="list-item-icon-menu trans" title="Open/Close"></div><h1 contenteditable="true">New LisT+</h1></div><div class="list"></div></div>')
        .find(">:last-child")
        .slideDown()
    }), $("body")
    .on("click", ".list-item-add", function() {
      $(this)
        .parent(".list-cat-title")
        .next(".list")
        .prepend('<div class="list-item draggable bg-grey"><div class="list-item-settings bg-grey"><div class="list-item-icon-settings" title="Settings"></div><div class="list-item-icon-color" title="Color"></div><div class="list-item-icon-arrow" title="Sort"></div><div class="list-item-icon-remove list-item-remove" title="Remove"></div></div><div contentEditable="true" class="list-item-content"></div></div>')
        .find(">:first-child")
        .slideToggle(), f(), d()
    }), $(".list-wrap")
    .on("mouseup", ".list-item-icon-arrow", function() {
      $(this)
        .parent()
        .removeClass("toggle")
    }), $(document)
    .on("click", ".about-trigger", function() {
      $(".about-text")
        .slideToggle("slow"), SoftScroll.go("about")
    }), $(document)
    .on("click", ".admin-trigger", function() {
      $(".admin")
        .toggleClass("toggle")
        .slideToggle("slow"), SoftScroll.go("admin")
    });
  $(document)
    .on("click", ".line-number-trigger", function() {
      $(this)
        .toggleClass("toggle"), $("div")
        .hasClass("line-number") ? a() : b()
    }), $(document)
    .on("click", ".list-cat-title .list-item-remove", function() {
      $(this)
        .closest(".list-cat")
        .prepend('<div class="popup-container"><div class="popup"><div class="icon-close close-popup">x</div><h1>Just Checkin\'</h1><p class="message">Are you sure you want to delete this Category?</p><div class="float-right"><a class="close-popup mr-10 cancel">Cancel</a><a class="remove-cat">Yes</a></div><br class="clear" /></div></div>'), $(".popup")
        .fadeIn("fast")
    }), $(document)
    .on("click", ".remove-cat", function() {
      $(this)
        .closest(".list-cat")
        .slideToggle("slow", function() {
          $(this)
            .remove(), c()
        }), $(".popup-container")
        .fadeOut("fast", function() {
          $(this)
            .remove()
        })
    }), $(document)
    .on("click", ".list-item .list-item-remove", function() {
      $(this)
        .closest(".list-item")
        .prepend('<div class="popup-container"><div class="popup remove-list-item"><div class="icon-close close-popup">x</div><h1>Just Checkin\'</h1><p class="message">Are you sure you want to delete this List-Item?</p><div class="float-right"><a class="close-popup mr-10 cancel">Cancel</a><a class="remove-item">Yes</a></div><br class="clear" /></div></div>'), $(".popup")
        .fadeIn("fast")
    }), $(document)
    .on("click", ".remove-item", function() {
      $(this)
        .closest(".list-item")
        .slideToggle("slow", function() {
          $(this)
            .remove(), c()
        }), $(".popup-container")
        .fadeOut("fast", function() {
          $(this)
            .remove()
        })
    }), $(document)
    .on("click", ".delete-list-check", function() {
      $("body")
        .prepend('<div class="popup-container"><div class="popup remove-category"><div class="icon-close close-popup">x</div><h1>Hold Up!</h1><p class="message">Are you sure you want to delete the whole LisT+?</p><div class="float-right"><a class="close-popup mr-10 cancel">Cancel</a><a class="delete-localstorage">Yes</a></div><br class="clear" /></div></div>'), $(".popup")
        .fadeIn("fast")
    }), $(document)
    .on("click", ".delete-localstorage", function() {
      $(".list-wrap")
        .html(localStorage.removeItem("lists")), $(".list-wrap")
        .empty(), $(".upload-list")
        .val(""), $(this)
        .closest(".popup-container")
        .fadeOut(function() {
          $(this)
            .remove()
        })
    }), $(document)
    .on("click", ".close-popup", function() {
      $(this)
        .closest(".popup-container")
        .fadeOut("fast", function() {
          $(this)
            .remove()
        })
    }), $(document)
    .on("click", ".checkin-trigger", function() {
      $(this)
        .toggleClass("toggle"), g()
    }), $.fn.rotateClass = function(a) {
      var b = this.each(function() {
        var b = $(this),
          c = (b.data("currentClassIndex") ? b.data("currentClassIndex") : 0) % a.length;
        b.removeClass(a.join(" "))
          .addClass(a[c])
          .data("currentClassIndex", ++c)
      });
      return b
    };
  var i = ["bg-red", "bg-orange", "bg-green", "bg-blue", "bg-purple", "bg-grey", "bg-d-grey"];
  $("body")
    .on("click", ".list-cat-title .list-item-icon-color", function() {
      $(this)
        .closest(".list-cat-title")
        .rotateClass(i), $(".list-cat-title .list-item-settings.toggle")
        .removeClass("bg-d-blue")
        .rotateClass(i)
    }), $("body")
    .on("click", ".list-item .list-item-icon-color", function() {
      $(this)
        .closest(".list-item")
        .rotateClass(i), $(".list-item .list-item-settings.toggle")
        .removeClass("bg-blue")
        .rotateClass(i)
    }), 0 !== localStorage.length ? (
           $(".list-wrap").html(localStorage.getItem("listplus")), 
           $(".list-cat,.list-item").slideDown(), 
           $(".list-item-settings").removeClass("toggle"),
           $(".tutorial").hide(),
           e(), 
           f(), 
           d()
       ) : (e(), f()), window.setInterval(h, 2e3), $(document)
    .on("click", ".save-list", function() {
      var a = $(".list-wrap")
        .html();
      $(this)
        .attr("href", "data:text/html," + a), $(this)
        .attr("download", "lisT+.txt")
    }), window.onload = function() {
      var a = document.getElementById("fileInput"),
        b = document.getElementById("fileInsert");
      a.addEventListener("change", function() {
        var c = a.files[0],
          e = /text.*/;
        if (c.type.match(e)) {
          var f = new FileReader;
          f.onload = function() {
            b.innerHTML = f.result, d()
          }, f.readAsText(c)
        } else b.innerText = "Sorry - The file must be a LisT+ Backup File!"
      })
    }
});