(function( $ ){

  $.fn.pad = function( options ) {
    var settings = {
      'host'              : 'http://beta.etherpad.org',
      'baseUrl'           : '/p/',
      'showControls'      : false,
      'showChat'          : false,
      'showLineNumbers'   : false,
      'userName'          : 'unnamed',
      'lang'              : '',
      'useMonospaceFont'  : false,
      'noColors'          : false,
      'userColor'         : false,
      'hideQRCode'        : false,
      'alwaysShowChat'    : false,
<<<<<<< HEAD
      'width'             : 1000,
      'height'            : 1000,
=======
      'width'             : 100,
      'height'            : 100,
>>>>>>> 26660be3cbf331af52ecfcbd4b1dfcc251ce65a0
      'border'            : 0,
      'borderStyle'       : 'solid',
      'toggleTextOn'      : 'Disable Rich-text',
      'toggleTextOff'     : 'Enable Rich-text',
      'plugins'           : {},
      'rtl'               : false
    };
<<<<<<< HEAD

    var $self = this;
    if (!$self.length) return;
    if (!$self.attr('id')) throw new Error('No "id" attribute');

=======
    
    var $self = this;
    if (!$self.length) return;
    if (!$self.attr('id')) throw new Error('No "id" attribute');
    
>>>>>>> 26660be3cbf331af52ecfcbd4b1dfcc251ce65a0
    var useValue = $self[0].tagName.toLowerCase() == 'textarea';
    var selfId = $self.attr('id');
    var epframeId = 'epframe'+ selfId;
    // This writes a new frame if required
    if ( !options.getContents ) {
      if ( options ) {
        $.extend( settings, options );
      }
<<<<<<< HEAD

=======
      
>>>>>>> 26660be3cbf331af52ecfcbd4b1dfcc251ce65a0
      var pluginParams = '';
      for(var option in settings.plugins) {
        pluginParams += '&' + option + '=' + settings.plugins[option]
      }

      var iFrameLink = '<iframe id="'+epframeId;
          iFrameLink = iFrameLink +'" name="' + epframeId;
          iFrameLink = iFrameLink +'" src="' + settings.host+settings.baseUrl+settings.padId;
          iFrameLink = iFrameLink + '?showControls=' + settings.showControls;
          iFrameLink = iFrameLink + '&showChat=' + settings.showChat;
          iFrameLink = iFrameLink + '&showLineNumbers=' + settings.showLineNumbers;
          iFrameLink = iFrameLink + '&useMonospaceFont=' + settings.useMonospaceFont;
          iFrameLink = iFrameLink + '&userName=' + settings.userName;
          if (settings.lang) {
            iFrameLink = iFrameLink + '&lang=' + settings.lang;
          }
          iFrameLink = iFrameLink + '&noColors=' + settings.noColors;
          iFrameLink = iFrameLink + '&userColor=' + settings.userColor;
          iFrameLink = iFrameLink + '&hideQRCode=' + settings.hideQRCode;
          iFrameLink = iFrameLink + '&alwaysShowChat=' + settings.alwaysShowChat;
          iFrameLink = iFrameLink + '&rtl=' + settings.rtl;
          iFrameLink = iFrameLink + pluginParams;
          iFrameLink = iFrameLink +'" style="border:' + settings.border;
          iFrameLink = iFrameLink +'; border-style:' + settings.borderStyle;
          iFrameLink = iFrameLink +';" width="' + '100%';//settings.width;
<<<<<<< HEAD
          iFrameLink = iFrameLink +'" height="' + settings.height;
          iFrameLink = iFrameLink +'"></iframe>';


      var $iFrameLink = $(iFrameLink);

=======
          iFrameLink = iFrameLink +'" height="' + settings.height; 
          iFrameLink = iFrameLink +'"></iframe>';
      
      
      var $iFrameLink = $(iFrameLink);
      
>>>>>>> 26660be3cbf331af52ecfcbd4b1dfcc251ce65a0
      if (useValue) {
        var $toggleLink = $('<a href="#'+ selfId +'">'+ settings.toggleTextOn +'</a>').click(function(){
          var $this = $(this);
          $this.toggleClass('active');
          if ($this.hasClass('active')) $this.text(settings.toggleTextOff);
          $self.pad({getContents: true});
          return false;
        });
        $self
          .hide()
          .after($toggleLink)
          .after($iFrameLink)
        ;
      }
<<<<<<< HEAD
      else {
=======
      else {      
>>>>>>> 26660be3cbf331af52ecfcbd4b1dfcc251ce65a0
        $self.html(iFrameLink);
      }
    }

    // This reads the etherpad contents if required
    else {
      var frameUrl = $('#'+ epframeId).attr('src').split('?')[0];
      var contentsUrl = frameUrl + "/export/html";
      var target = $('#'+ options.getContents);

      // perform an ajax call on contentsUrl and write it to the parent
      $.get(contentsUrl, function(data) {
<<<<<<< HEAD

=======
        
>>>>>>> 26660be3cbf331af52ecfcbd4b1dfcc251ce65a0
        if (target.is(':input')) {
          target.val(data).show();
        }
        else {
          target.html(data);
        }
<<<<<<< HEAD

        $('#'+ epframeId).remove();
      });
    }


=======
        
        $('#'+ epframeId).remove();
      });
    }
    
    
>>>>>>> 26660be3cbf331af52ecfcbd4b1dfcc251ce65a0
    return $self;
  };
})( jQuery );
