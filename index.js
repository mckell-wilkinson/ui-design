const insertToolWindow = `
<div id="dwuijb-tool-window" class="dwuijb-tool-window dwuijb-hide" style="width: 370px !Important; max-width: 370px !Important;">
<div class="dwuijb-exit-tool-window" id="dwuijb-exit-tool-window">
<p class="dwuijb-exit-cross" id="dwuijb-exit-cross">🞫</p>
</div>
<div id="dwuijb-tool-header" class="dwuijb-tool-header">

<h4 id="dwuijb-ui-name" class="dwuijb-ui-name">UI]esign</h4>

</div>
<div class="dwuijb-tool-content" id="dwuijb-tool-content">
<p id="dwuijb-tool-intro-text" class="dwuijb-tool-intro-text">Select an element on the page to get started</p>
<p class="dwuijb-tool-intro-emoji" id="dwuijb-tool-intro-emoji">🖱️</p>
<div id="dwuijb-clicked-on-text" class="dwuijb-clicked-on-text dwuijb-hide">
  <div id="dwuijb-font-detail" class="dwuijb-font-detail">
    <div id="dwuijb-font-change">
      <p id="dwuijb-change-content" class="dwuijb-font-text">Change content:</p>
      <textarea id="dwuijb-tool-input-text" class="dwuijb-tool-input-text"></textarea>
    </div>
  </div>

  <div id="dwuijb-font-size" class="dwuijb-font-size">
    <div class="dwuijb-font-container" id="dwuijb-font-container">
      <p id="dwuijb-font-size-text" class="dwuijb-font-size-text">Font size (px):</p>
      <input type="number" min="8" max="100" value="" class="dwuijb-font-size-field" id="dwuijb-font-size-field">
      <img class="dwuijb-bold-icon dwuijb-decoration-icon" id="dwuijb-bold-icon" src="https://webfree.online/ext/icons/bold.png">
      <img class="dwuijb-italic-icon dwuijb-decoration-icon" id="dwuijb-italic-icon" src="https://webfree.online/ext/icons/italic.png">
      <img class="dwuijb-underline-icon dwuijb-decoration-icon" id="dwuijb-underline-icon" src="https://webfree.online/ext/icons/underline.png">
    </div>
  </div>

  <div id="dwuijb-overall-color-container" class="dwuijb-overall-color-container">
    <div id="dwuijb-show-hide-color" class="dwuijb-show-hide-color">
      <div id="dwuijb-input-color-container" class="dwuijb-input-color-container">
        <p id="dwuijb-color-text" class="dwuijb-color-text">Font color:</p>
        <input type="color" id="dwuijb-tool-input-color" class="dwuijb-tool-input-color" name="textColor"
          value="#ffffff">
          <div id="dwuijb-tool-text-color-cover" class="dwuijb-tool-input-cover"></div>

      </div>


    </div>



    <div id="dwuijb-show-hide-img" class="dwuijb-show-hide-img dwuijb-img-full-width">
      <div id="dwuijb-input-img-container" class="dwuijb-input-img-container">
        <p id="dwuijb-img-text" class="dwuijb-img-text">Change image:</p>
        <p class="dwuijb-insert-img-add" id="dwuijb-insert-img-add"> <a class="dwuijb-insert-img"
            id="dwuijb-insert-img"><svg id="dwuijb-svg-plus-img" class="dwuijb-svg-plus"
              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="dwuijb-feather feather-plus-circle">
              <circle id="dwuijb-svgline-50" cx="12" cy="12" r="10"></circle>
              <line id="dwuijb-svgline-51" x1="12" y1="8" x2="12" y2="16"></line>
              <line id="dwuijb-svgline-52" x1="8" y1="12" x2="16" y2="12"></line>
            </svg></a></p>
        <div id="dwuijb-img-container" class="dwuijb-img-container dwuijb-hide">
          <img id="dwuijb-img-thumb" class="dwuijb-img-thumb" src="">
          <div class="dwuijb-download" id="dwuijb">
            <p id="dwuijb-download-link"></p>
            <a id="dwuijb-remove-img">
              <p id="dwuijb-remove-img-x" class="dwuijd-remove-btn">Remove x</p>
            </a>
          </div>
        </div>
      </div>


    </div>


    <div id="dwuijb-overall-text-bg-container" class="dwuijb-overall-bg-container">
    <div id="dwuijb-input-text-bg-container" class="dwuijb-input-bg-container">
      <p class="dwuijb-bg-color-text" id="dwuijb-insert-text-bg-color">Background color:</p>
      <p class="dwuijb-insert-bg-add" id="dwuijb-insert-text-bg-add"> <a class="dwuijb-insert-bg"
          id="dwuijb-insert-text-bg"><svg id="dwuijb-svg-plus" class="dwuijb-svg-plus"
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="dwuijb-feather feather-plus-circle">
            <circle id="dwuijb-svgline-4" cx="12" cy="12" r="10"></circle>
            <line id="dwuijb-svgline-5" x1="12" y1="8" x2="12" y2="16"></line>
            <line id="dwuijb-svgline-6" x1="8" y1="12" x2="16" y2="12"></line>
          </svg></a></p>
      <div id="dwuijb-text-background-container" class="dwuijb-background-container dwuijb-hide">

        <input type="color" id="dwuijb-tool-text-bg-color" class="dwuijb-tool-input-color" name="bcColor"
          value="#000000">
        <div id="dwuijb-tool-text-input-cover" class="dwuijb-tool-input-cover"></div>
        <a id="dwuijb-remove-text-bg">
          <p id="dwuijb-remove-text-bg-x" class="dwuijd-remove-btn">Remove x</p>
        </a>
      </div>
    </div>

  </div>





    <div id="dwuijb-overall-bg-container" class="dwuijb-overall-bg-container">
      <div id="dwuijb-input-bg-container" class="dwuijb-input-bg-container">
        <p class="dwuijb-bg-color-text" id="dwuijb-insert-bg-color">Background color:</p>
        <p class="dwuijb-insert-bg-add" id="dwuijb-insert-bg-add"> <a class="dwuijb-insert-bg"
            id="dwuijb-insert-bg"><svg id="dwuijb-svg-plus" class="dwuijb-svg-plus"
              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="dwuijb-feather feather-plus-circle">
              <circle id="dwuijb-svgline-4" cx="12" cy="12" r="10"></circle>
              <line id="dwuijb-svgline-5" x1="12" y1="8" x2="12" y2="16"></line>
              <line id="dwuijb-svgline-6" x1="8" y1="12" x2="16" y2="12"></line>
            </svg></a></p>
        <div id="dwuijb-background-container" class="dwuijb-background-container dwuijb-hide">

          <input type="color" id="dwuijb-tool-bg-color" class="dwuijb-tool-input-color" name="bgColorTwo
            value="#000000">
          <div id="dwuijb-tool-input-cover" class="dwuijb-tool-input-cover"></div>
          <a id="dwuijb-remove-bg">
            <p id="dwuijb-remove-bg-x" class="dwuijd-remove-btn">Remove x</p>
          </a>
        </div>
      </div>

    </div>



    <div id="dwuijb-overall-gradient-container" class="dwuijb-overall-gradient-container dwuijb-hide">
      <div id="dwuijb-input-gradient-container" class="dwuijb-input-gradient-container">
        <p class="dwuijb-gradient-color-text" id="dwuijb-insert-gradient-color">Gradient:</p>
        <p class="dwuijb-insert-gradient-add" id="dwuijb-insert-gradient-add"> <a class="dwuijb-insert-gradient"
            id="dwuijb-insert-gradient"><svg id="dwuijb-svg-plus" class="dwuijb-svg-plus"
              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="dwuijb-feather feather-plus-circle">
              <circle id="dwuijb-svgline-4" cx="12" cy="12" r="10"></circle>
              <line id="dwuijb-svgline-5" x1="12" y1="8" x2="12" y2="16"></line>
              <line id="dwuijb-svgline-6" x1="8" y1="12" x2="16" y2="12"></line>
            </svg></a></p>
        <div id="dwuijb-gradient-container" class="dwuijb-gradient-container dwuijb-hide">

          <input type="color" id="dwuijb-tool-gradient-color" class="dwuijb-tool-input-color" name="bgColorThree"
            value="#000000">
          <div id="dwuijb-tool-input-cover-gradient" class="dwuijb-tool-input-cover"></div>
          <a id="dwuijb-remove-gradient">
            <p id="dwuijb-remove-gradient-x" class="dwuijd-remove-btn">Remove x</p>
          </a>
        </div>
      </div>
    </div>



    <div id="dwuijb-overall-gradient-2-container" class="dwuijb-overall-gradient-2-container dwuijb-hide">
      <div id="dwuijb-input-gradient-2-container" class="dwuijb-input-gradient-2-container">
        <p class="dwuijb-gradient-2-color-text" id="dwuijb-insert-gradient-2-color">Another gradient:</p>
        <p class="dwuijb-insert-gradient-2-add" id="dwuijb-insert-gradient-2-add"> <a
            class="dwuijb-insert-gradient-2" id="dwuijb-insert-gradient-2"><svg id="dwuijb-svg-plus"
              class="dwuijb-svg-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="dwuijb-feather feather-plus-circle">
              <circle id="dwuijb-svgline-4" cx="12" cy="12" r="10"></circle>
              <line id="dwuijb-svgline-5" x1="12" y1="8" x2="12" y2="16"></line>
              <line id="dwuijb-svgline-6" x1="8" y1="12" x2="16" y2="12"></line>
            </svg></a></p>
        <div id="dwuijb-gradient-2-container" class="dwuijb-gradient-2-container dwuijb-hide">

          <input type="color" id="dwuijb-tool-gradient-2-color" class="dwuijb-tool-input-color" name="bgColorFour"
            value="#000000">
          <div id="dwuijb-tool-input-cover-gradient-2" class="dwuijb-tool-input-cover"></div>
          <a id="dwuijb-remove-gradient-2">
            <p id="dwuijb-remove-gradient-2-x" class="dwuijd-remove-btn">Remove x</p>
          </a>
        </div>
      </div>
    </div>


    <div id="dwuijb-gradient-direction-container" class="dwuijb-gradient-direction-container dwuijb-hide">
    <p id="dwuijb-gradient-direction-text" class="dwuijb-gradient-direction-text">Gradient direction:</p>
    <select id="dwuijb-gradient-direction" class="dwuijb-gradient-direction">
      <option value="to top">to top</option>
      <option value="to right top">to top-right</option>
      <option value="to right">to right</option>
      <option value="to right bottom">to bottom-right</option>
      <option value="to bottom">to bottom</option>
      <option value="to left bottom">to bottom-left</option>
      <option value="to left">to left</option>
      <option value="to left top">to top-left</option>
    </select>
    </div>




  </div>

  <div id="dwuijb-input-padding-container" class="dwuijb-input-border-container">
    <p class="dwuijb-bg-border-text" id="dwuijb-bg-padding-text">Padding:</p>
    <div class="dwuijb-br-tl" id="dwuijb-padding-top">
    
      <p class="dwuijb-top-left" id="dwuijb-top-padding">T</p>
      <input class="dwuijb-border-value-tl" id="dwuijb-padding-value-top" type="number" min="-1000" value="0"
        placeholder="0" />
      <p id="dwuijb-pixels-margin-top">px</p>
    </div>
    <div class="dwuijb-br-tl" id="dwuijb-padding-right">
      
      <p class="dwuijb-top-left" id="dwuijb-right-padding">R</p>
      <input class="dwuijb-border-value-tl" id="dwuijb-padding-value-right" type="number" min="-1000" value="0"
        placeholder="0" />
      <p id="dwuijb-pixels-margin-top">px</p>
    </div>
    <div class="dwuijb-br-tl" id="dwuijb-padding-bottom">
  
      <p class="dwuijb-top-left" id="dwuijb-bottom-padding">B</p>
      <input class="dwuijb-border-value-tl" id="dwuijb-padding-value-bottom" type="number" min="-1000" value="0"
        placeholder="0" />
      <p id="dwuijb-pixels-margin-top">px</p>
    </div>
    <div class="dwuijb-br-tl" id="dwuijb-padding-left">
      
      <p class="dwuijb-top-left" id="dwuijb-left-padding">L</p>
      <input class="dwuijb-border-value-tl" id="dwuijb-padding-value-left" type="number" min="-1000" value="0"
        placeholder="0" />
      <p id="dwuijb-pixels-margin-top">px</p>
    </div>
  </div>


  <div id="dwuijb-input-margin-container" class="dwuijb-input-border-container">
    <p class="dwuijb-bg-border-text" id="dwuijb-bg-margin-text">Margin:</p>
    <div class="dwuijb-br-tl" id="dwuijb-margin-top">
      
      <p class="dwuijb-top-left" id="dwuijb-top-margin">T</p>
      <input class="dwuijb-border-value-tl" id="dwuijb-margin-value-top" type="number" min="-1000" value="0"
        placeholder="0" />
      <p id="dwuijb-pixels-margin-top">px</p>
    </div>
    <div class="dwuijb-br-tl" id="dwuijb-margin-right">
    
      <p class="dwuijb-top-left" id="dwuijb-right-margin">R</p>
      <input class="dwuijb-border-value-tl" id="dwuijb-margin-value-right" type="number" min="-1000" value="0"
        placeholder="0" />
      <p id="dwuijb-pixels-margin-top">px</p>
    </div>
    <div class="dwuijb-br-tl" id="dwuijb-margin-bottom">
    
      <p class="dwuijb-top-left" id="dwuijb-bottom-margin">B</p>
      <input class="dwuijb-border-value-tl" id="dwuijb-margin-value-bottom" type="number" min="-1000" value="0"
        placeholder="0" />
      <p id="dwuijb-pixels-margin-top">px</p>
    </div>
    <div class="dwuijb-br-tl" id="dwuijb-margin-left">
      
      <p class="dwuijb-top-left" id="dwuijb-left-margin">L</p>
      <input class="dwuijb-border-value-tl" id="dwuijb-margin-value-left" type="number" min="-1000" value="0"
        placeholder="0" />
      <p id="dwuijb-pixels-margin-top">px</p>
    </div>
  </div>




  <div id="dwuijb-input-border-container" class="dwuijb-input-border-container">
    <p class="dwuijb-bg-border-text" id="dwuijb-bg-border-text">Border radius:</p>
    <div class="dwuijb-br-tl" id="dwuijb-br-tl">
      <div id="dwuijb-tl-marker" class="dwuijb-tl-marker"></div>
      <p class="dwuijb-top-left" id="dwuijb-top-left">TL</p>
      <input class="dwuijb-border-value-tl" id="dwuijb-border-value-tl" type="number" min="0" value="0"
        placeholder="0" />
      <p id="dwuijb-pixels-tl"></p>
    </div>
    <div class="dwuijb-br-tr" id="dwuijb-br-tr">
      <div id="dwuijb-tr-marker" class="dwuijb-tr-marker"></div>
      <p class="dwuijb-top-left" id="dwuijb-top-right">TR</p>
      <input class="dwuijb-border-value-tr" id="dwuijb-border-value-tr" type="number" min="0" value="0"
        placeholder="0" />
      <p id="dwuijb-pixels-tr"></p>
    </div>
    <div class="dwuijb-br-br" id="dwuijb-br-br">
      <div id="dwuijb-br-marker" class="dwuijb-br-marker"></div>
      <p class="dwuijb-top-left" id="dwuijb-bottom-right">BR</p>
      <input class="dwuijb-border-value-br" id="dwuijb-border-value-br" type="number" min="0" value="0"
        placeholder="0" />
      <p id="dwuijb-pixels-br"></p>
    </div>
    <div class="dwuijb-br-bl" id="dwuijb-br-bl">
      <div id="dwuijb-bl-marker" class="dwuijb-bl-marker"></div>
      <p class="dwuijb-top-left" id="dwuijb-bottom-left">BL</p>
      <input class="dwuijb-border-value-bl" id="dwuijb-border-value-bl" type="number" min="0" value="0"
        placeholder="0" />
      <p id="dwuijb-pixels-bl"></p>
    </div>
  </div>



  <div id="dwuijb-element-position" class="dwuijb-element-position">

    <div id="dwuijb-slide-container-2" class="dwuijb-slidecontainer">
      <div id="dwuijb-img-width-container" class="dwuijb-img-width-container">
        <p id="dwuijb-img-width" class="dwuijb-img-width">Image width: <span id="dwuijb-img-width-value"></span></p>
        <input type="range" min="0" max="2000" value="0" class="dwuijb-slider dwuijb-slider-1"
          id="dwuijb-element-slider-width">
      </div>
      <p id="dwuijb-x-transform-value" class="dwuijb-font-size-text">x-axis (left / right): <span
          id="dwuijb-new-x-transform-value"></span></p>
      <input type="range" min="-1000" max="1000" value="0" class="dwuijb-slider dwuijb-slider-1"
        id="dwuijb-element-slider-x">

      <p id="dwuijb-y-transform-value" class="dwuijb-font-size-text">y-axis (up / down): <span
          id="dwuijb-new-y-transform-value"></span></p>
      <input type="range" min="-1000" max="1000" value="0" class="dwuijb-slider dwuijb-slider-2"
        id="dwuijb-element-slider-y">

    </div>
  </div>


  <div id="dwuijb-submit-button-placeholder" class="">
    <div id="dwuijb-submit-button" class="dwuijb-hide">
      <input type="submit" id="dwuijb-button-apply" class="dwuijb-button-apply " value="Apply">

    </div>
  </div>
</div>
</div>
</div>

`;

//INSERT THE PLAY ICON HTML

const insertPlayIcon = `

<div class="dwuijb-play-container" id="dwuijb-play-container">

<svg class="dwuijb-play-icon dwuijb-feather feather-play" id="dwuijb-init-ui" xmlns="http://www.w3.org/2000/svg"
width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
stroke-linejoin="round">
<polygon id="dwuijb-svgline-10" points="5 3 19 12 5 21 5 3"></polygon>
</svg>
</div>
<div class="dwuijb-download-code" id="dwuijb-download-code">
<div id="dwuijb-download-stylesheet" class="dwuijb-download-btn-stylesheet">


<img src="https://webfree.online/ext/icons/code.png" alt="" class="dwuijb-download-icon" id="dwuijb-download-icon">


</div>
</div>
<div class="dwuijb-download-img" id="dwuijb-download-img">
<div id="dwuijb-download" class="dwuijb-download-btn">


    <img src="https://webfree.online/ext/icons/info.png" alt="" class="dwuijb-info-icon" id="dwuijb-info-icon">


</div>
</div>
<div class="dwuijb-amend-font" id="dwuijb-amend-font">
<div id="dwuijb-change-font" class="dwuijb-change-font">


    <img src="https://webfree.online/ext/icons/type.png" alt="" class="dwuijb-font-icon" id="dwuijb-font-icon">



</div>
</div>
`;

//INSERT THE AMEND FONT WINDOW HTML

const amendFont = `
<div class="dwuijb-font-window dwuijb-hide" id="dwuijb-font-window">
<div class="dwuijb-exit-tool-window" id="dwuijb-exit-font-window">
<p class="dwuijb-exit-cross" id="dwuijb-exit-cross-font">🞫</p>
</div>
<select class="dwuijb-choose-font" id="dwuijb-choose-font" name="font">
<option class="dwuijb-input-value" value="">Initial font</option>
<option class="dwuijb-input-value lato" style="font-family:'Lato', sans-serif !Important;"
  value="'Lato', sans-serif">Lato</option>
<option class="dwuijb-input-value lora" style="font-family:'Lora', serif !Important;" value="'Lora', serif">Lora
</option>
<option class="dwuijb-input-value montserrat" style="font-family:'Montserrat', sans-serif !Important;"
  value="'Montserrat', sans-serif">Montserrat</option>
<option class="dwuijb-input-value noto-sans" style="font-family:'Noto Sans', sans-serif !Important;"
  value="'Noto Sans', sans-serif">Noto Sans</option>
<option class="dwuijb-input-value nunito-sans" style="font-family:'Nunito Sans', sans-serif !Important;"
  value="'Nunito Sans', sans-serif">Nunito Sans</option>
<option class="dwuijb-input-value open-sans" style="font-family:'Open Sans', sans-serif !Important;"
  value="'Open Sans', sans-serif">Open Sans</option>
<option class="dwuijb-input-value oswald" style="font-family:'Oswald', sans-serif !Important;"
  value="'Oswald', sans-serif">Oswald</option>
<option class="dwuijb-input-value prompt" style="font-family:'Prompt', sans-serif !Important;"
  value="'Prompt', sans-serif">Prompt</option>
<option class="dwuijb-input-value pt-sans" style="font-family:'PT Sans', sans-serif !Important;"
  value="'PT Sans', sans-serif">PT Sans</option>
<option class="dwuijb-input-value raleway" style="font-family: 'Raleway', sans-serif !Important;"
  value="'Raleway', sans-serif">Raleway</option>
<option class="dwuijb-input-value roboto" style="font-family:'Roboto', sans-serif !Important;"
  value="'Roboto', sans-serif">Roboto</option>
<option class="dwuijb-input-value slabo" style="font-family:'Slabo 27px', serif !Important;"
  value="'Slabo 27px', serif">Slabo</option>
<option class="dwuijb-input-value source-sans-pro" style="font-family:'Source Sans Pro', sans-serif !Important;"
  value="'Source Sans Pro', sans-serif">Source Sans Pro</option>
<option class="dwuijb-input-value work-sans" style="font-family:'Work Sans', sans-serif !Important;"
  value="'Work Sans', sans-serif">Work Sans</option>
</select>
<span class="dwuijb-regular-font" id="dwuijb-regular-font-itallic"><i>Am I your type?</i></span>
<span class="dwuijb-bold-font" id="dwuijb-bold-font-itallic"><i>Am I your type?</i></span>
<span class="dwuijb-regular-font" id="dwuijb-regular-font">Am I your type?</span>
<span class="dwuijb-bold-font" id="dwuijb-bold-font">Am I your type?</span>
<input type="submit" id="dwuijb-submit-font" class="dwuijb-font-button-apply" value="Apply">
</div>
`;

//insert the image change tool

const imgChange = `

<div class="dwuijb-img-window dwuijb-hide" id="dwuijb-img-window">
<p class="dwuijb-exit-cross-img" id="dwuijb-exit-cross-img">🞫</p>
<h4 class="dwuijb-ui-change-img" id="dwuijb-ui-change-img">Change image</h4>
<input type="search" class="dwuijb-search" id="dwuijb-search" placeholder="Search beautiful images...">
<input type="submit" id="dwuijb-submit-search" class="dwuijb-submit-search">
<label for="dwuijb-img-upload" id="dwuijb-img-btn"><img id="dwuijb-upload-img" src="https://webfree.online/ext/icons/upload.png">Upload your own image</label>
<input type="file" id="dwuijb-img-upload" name="image-uploads" accept=".jpg, .jpeg, .png, .gif, .pjpeg">
<div class="dwuijb-flex-photo" id="dwuijb-flex-photo">
</div>
<a class="dwuijb-powered-by" id="dwuijb-powered-by" href="https://unsplash.com/" target="_blank"
rel="noopener">Powered ⚡ by unsplash</a>
</div>
`;

//insert the info window

const infoWindow = `

<div class="dwuijb-info-window dwuijb-hide" id="dwuijb-info-window">
    <p class="dwuijb-exit-cross-img" id="dwuijb-exit-cross-info">🞫</p>
    <h4 class="dwuijb-ui-info" id="dwuijb-ui-info">Info</h4>
    <p class="dwuijb-info-font" id="dwuijb-info-font">Please watch the video below for a quick demonstration on how to use the tool</p>

    <iframe class="dwuijb-youtube" id="dwuijb-youtube" width="560" height="315" src="https://www.youtube.com/embed/jxt0vcEkG-0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    </div>


`;

// //access key - b45e2a7816813fa5457592eec1b583677db4534cfa3ab09e0d398e6daed9e7e0
// //secret key - 5a8cd2a7d2fff9fa03182f161b1df27b1c5fa3a9ae0d9037b97b2d5c48d0c62e

class Search {
  constructor(query) {
    this.query = query;
  }

  // get results from unsplash

  async getResults() {
    const x1eg4 =
      "b45e2a7816813fa5457592eec1b583677db4534cfa3ab09e0d398e6daed9e7e0";

    try {
      const res = await fetch(
        `https://api.unsplash.com/search/photos?client_id=${x1eg4}&query=${this.query}&per_page=30`,
        { method: "get" }
      );
      const data = await res.json();
      this.result = data.results;
    } catch (error) {
      alert(`Sorry something has gone wrong!`);
    }
  }
}

const state = {};

const controlSearch = async () => {
  const query = document.getElementById("dwuijb-search").value;

  if (query) {
    state.search = new Search(query);

    await state.search.getResults();
    renderResults(state.search.result);
  }
};

//clear previous image results on click submit button

const clearResults = () => {
  document.getElementById("dwuijb-flex-photo").textContent = "";
};

//render results in UI

const renderResults = (images, page = 1, resPerPage = 30) => {
  //render results of current page

  const start = (page - 1) * resPerPage;
  const end = page * resPerPage;

  //show previous and next buttons

  clearResults();

  if (images) {
    document.getElementById("dwuijb-img-window").style.height = "90%";
    document.getElementById("dwuijb-img-window").style.overflowY = "scroll";

    // overflow: scroll;
    // height: 100%;

    //this gets the image in the unsplash api which was clicked on and changes the image in the tool window ready to be inserted on click of apply

    let renderImages = (el, index) => {
      //html for each image. Uses thumbnail image for quick download

      document.getElementById("dwuijb-flex-photo").insertAdjacentHTML(
        "beforeend",
        `
            <div class="dwuijb-api-img-box" id="dwuijb-api-img-box-${index}">
            <img class="dwuijb-api-img" id="dwuijb-api-img-${index}" src="${state.search.result[index].urls.thumb}">
            <a target="_blank" rel"noopener" class="dwuijb-img-download" id="dwuijb-img-download-${index}" href="${state.search.result[index].links.html}">Download from Unsplash</a>
            <a target="_blank" rel"noopener" class="dwuijb-img-username" id="dwuijb-img-username-${index}" href="https://www.unsplash.com/@${state.search.result[index].user.username}">Photo by ${state.search.result[index].user.name}</a>
            
            </div>
            `
      );

      //push the image ids into descendant array so aren't able to be selected by UI tool

      descendantArray.push(`dwuijb-api-img-box-${index}`);
      descendantArray.push(`dwuijb-api-img-${index}`);
      descendantArray.push(`dwuijb-img-download-${index}`);
      descendantArray.push(`dwuijb-img-username-${index}`);

      //puts all images into an array for them to be selected

      const unsplashImgs = document.querySelectorAll(".dwuijb-api-img");

      for (let i = 0; i < unsplashImgs.length; i++) {
        //insert the image to placeholder

        const changeImgTool = () => {
          //this downloads the full size image when the image is inserted

          let chosenUnsplashImage = state.search.result[i].urls.full;
          let initialImg = document.getElementById("dwuijb-img-thumb");
          initialImg.src = chosenUnsplashImage;
          removeImageTool();
        };

        unsplashImgs[i].addEventListener("click", changeImgTool);
      }
    };

    //show only images one to ten on first load

    images.slice(start, end).forEach(renderImages);
  }
};

let insertUploadFunc = () => {
  let uploadImg = document.getElementById("dwuijb-img-upload");
  let imageNew = document.getElementById("dwuijb-img-thumb");

  uploadImg.addEventListener("change", updateImageDisplay);

  function updateImageDisplay() {
    let curFiles = uploadImg.files;

    for (let i = 0; i < curFiles.length; i++) {
      if (validFileType(curFiles[i])) {
        imageNew.src = window.URL.createObjectURL(curFiles[i]);
      }
    }

    removeImageTool();
  }

  let fileTypes = ["image/jpeg", "image/pjpeg", "image/png", "image/gif"];

  function validFileType(file) {
    for (let i = 0; i < fileTypes.length; i++) {
      if (file.type === fileTypes[i]) {
        return true;
      }
    }

    return false;
  }
};

// download code changes - all code changes are passed into hte export code array when apply button clicked

let applyChange;
let gradientColorArray;
var bgColorHighlight;

let descendantArray = [];

let downloadCode = () => {
  let exportCode = [["Your new code is below."], [" "]];

  //all elements that have changed have had a class applied

  let allAmendedEl = document.querySelectorAll(".dwuijb-amended-element");

  allAmendedEl.forEach(function(el) {
    let elParentClass = el.parentElement.className;
    let cssText = el.style.cssText;
    let elType = el.nodeName;

    if (elType === "img") {
      exportCode.push([`test`], []);
    }

    exportCode.push([`.${elParentClass} ${elType} { ${cssText} }`], []);
  });

  // download code changes

  let codeContent = "data:text/csv;charset=utf-8,";

  exportCode.forEach(function(rowArray) {
    let row = rowArray.join(",");
    codeContent += row + "\r\n";
  });

  var encodedUri = encodeURI(codeContent);
  window.open(encodedUri);
};

//dwuijb-hide play etc. and insert tool window

const hidePlay = () => {
  document.getElementById("dwuijb-play-container").classList.add("dwuijb-hide");
  document.getElementById("dwuijb-download-img").classList.add("dwuijb-hide");
  document.getElementById("dwuijb-amend-font").classList.add("dwuijb-hide");
  document.getElementById("dwuijb-tool-window").classList.remove("dwuijb-hide");
  document.getElementById("dwuijb-tool-window").classList.add("dwuijb-animate");
  document.getElementById("dwuijb-download-code").classList.add("dwuijb-hide");
};

//show the play button when close tool window

let showPlay = () => {
  //show the play icon
  document
    .getElementById("dwuijb-play-container")
    .classList.remove("dwuijb-hide");
  document
    .getElementById("dwuijb-download-img")
    .classList.remove("dwuijb-hide");
  document.getElementById("dwuijb-amend-font").classList.remove("dwuijb-hide");
  document.getElementById("dwuijb-tool-window").classList.add("dwuijb-hide");
  document
    .getElementById("dwuijb-tool-window")
    .classList.remove("dwuijb-animate");
  document
    .getElementById("dwuijb-download-code")
    .classList.remove("dwuijb-hide");
};

//on click play set the tool running

let runInit = () => {
  //show warning if try to leave page

  window.onbeforeunload = function() {
    return true;
  };

  //Make the tool window draggable

  dragElement(document.getElementById("dwuijb-tool-window"));

  function dragElement(elmnt) {
    var pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;

    /* tool header is where you move the DIV from:*/
    document.getElementById("dwuijb-tool-header").onmousedown = dragMouseDown;

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onclick = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = elmnt.offsetTop - pos2 + "px";
      elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    }

    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onclick = null;
      document.onmousemove = null;
    }
  }

  //Anything in this array gets ignored by any of the CSS changes applied in the DOM - some items already in as they are rendered after the page has loaded and this function has run

  descendantArray = [
    "dwuijb-init-ui",
    "dwuijb-tool-window",
    "dwuijb-play-container",
    "dwuijb-background-container",
    "dwuijb-tool-bg-color",
    "dwuijb-remove-bg",
    "dwuijb-svg-cross",
    "colorpick-eyedropper-input-trigger",
    "dwuijb-img-window",
    "dwuijb-down-link",
    "dwuijb-download-icon",
    "dwuijb-change-font",
    "dwuijb-amend-font",
    "dwuijb-svgline-10",
    "dwuijb-next-img",
    "dwuijb-prev-img",
    "colorpick-eyedropper-input-trigger-0",
    "colorpick-eyedropper-input-trigger-1",
    "colorpick-eyedropper-input-trigger-2",
    "colorpick-eyedropper-input-trigger-3",
    "colorpick-eyedropper-input-trigger-4",
    "dwuijb-download-img",
    "dwuijb-font-icon",
    "dwuijb-download-icon",
    "dwuijb-info-icon",
    "dwuijb-download",
    "dwuijb-download-img",
    "dwuijb-change-font",
    "dwuijb-amend-font",
    "dwuijb-download-stylesheet",
    "dwuijb-download-code",
    "dwuijb-svgline-10",
    "dwuijb-exit-cross-info"
  ];

  //push all children of tool window into descendantArray to prevent the css changes being applied - every child of tool window must have an id to be excluded

  let descendants = Array.prototype.slice.call(
    document.getElementById("dwuijb-tool-window").querySelectorAll("*")
  );

  descendants.forEach(function(descendant) {
    descendantArray.push(descendant.id);
  });

  let descendantimg = Array.prototype.slice.call(
    document.getElementById("dwuijb-img-window").querySelectorAll("*")
  );

  descendantimg.forEach(function(descendantimg) {
    descendantArray.push(descendantimg.id);
  });

  let desccendentsChangeFont = Array.prototype.slice.call(
    document.getElementById("dwuijb-font-window").querySelectorAll("*")
  );

  desccendentsChangeFont.forEach(function(desccendentsChangeFont) {
    descendantArray.push(desccendentsChangeFont.id);
  });

  //remove empty strings from array
  descendantArray = descendantArray.filter(Boolean);

  //This adds the hover effect when over an element

  let highlightElement = el => {
    //first part stops tool window being highlighted on hover / second part stops anything on page being highlighted when color picker is active
    if (
      descendantArray.includes(el.target.id) ||
      document.querySelector(".dwuijb-prevent-select")
    ) {
    }
    //highlght element on hover (adds grey background)
    else {
      el.target.classList.add("dwuijb-background-highlight");
    }
  };

  hidePlay();

  //this prevents the color picker tool being highlighted or selected

  let colorPicker = document.querySelectorAll(
    ".colorpick-eyedropper-input-trigger"
  );

  //assigns eyedropper an ID and pushes into desc array above to be excluded

  for (let i = 0; i < colorPicker.length; i++) {
    colorPicker[i].setAttribute(
      "id",
      `colorpick-eyedropper-input-trigger-${i}`
    );
    descendantArray.push(colorPicker[i].id);
  }

  //add hover function to run on mouse over - adds grey border
  document.body.addEventListener("mouseover", highlightElement);

  //  removes the hover effect when move off that element
  document.body.addEventListener("mouseout", element => {
    element.target.classList.remove("dwuijb-background-highlight");
    element.target.style.background = bgColorHighlight;
  });

  // if clicked on the color dropper / pipette tool then this stops select element and highlight element running

  let setBodyClass = () => {
    document.querySelector("body").classList.add("dwuijb-prevent-select");
  };

  let eyeDropperArr = document.querySelectorAll(
    ".colorpick-eyedropper-input-trigger"
  );

  for (let i = 0; i < eyeDropperArr.length; i++) {
    let eyeArrId = eyeDropperArr[i].id;
    document.getElementById(eyeArrId).addEventListener("click", setBodyClass);
  }

  //this starts select and highlight element running when user has selected color using eyedropper tool

  let removeBodyClass = () => {
    document.querySelector("body").classList.remove("dwuijb-prevent-select");
  };

  document
    .getElementById("dwuijb-tool-input-color")
    .addEventListener("change", removeBodyClass);
  document
    .getElementById("dwuijb-tool-bg-color")
    .addEventListener("change", removeBodyClass);
  document
    .getElementById("dwuijb-tool-text-bg-color")
    .addEventListener("change", removeBodyClass);
  document
    .getElementById("dwuijb-tool-gradient-color")
    .addEventListener("change", removeBodyClass);
  document
    .getElementById("dwuijb-tool-gradient-2-color")
    .addEventListener("change", removeBodyClass);

  //  prevents click through on element selected eg href

  let preventClickThrough = el => {
    //first part stops tool being selected / second part stops anything on page being selected when color picker is active

    if (
      descendantArray.includes(el.target.id) ||
      document.querySelector(".dwuijb-prevent-select")
    ) {
    } else {
      el.preventDefault();
      el.stopPropagation();
      el.stopImmediatePropagation();

      selectElement(el);
    }
  };

  document.body.addEventListener("click", preventClickThrough, {
    capture: true
  });

  //  ENDS THE init function when the eXit in the corner of the window is clicked - back to normal website

  let endInit = () => {
    showPlay();

    //end highlight element
    document.body.removeEventListener("mouseover", highlightElement);
    //and ability to select element
    document.body.removeEventListener("click", selectElement);
  };

  document
    .querySelector(".dwuijb-exit-tool-window")
    .addEventListener("click", endInit);
};

//this allows the image tool to be removed in the api view

function removeImageTool() {
  document.getElementById("dwuijb-img-window").classList.add("dwuijb-hide");
}

//when tool is running allow elements to be selected and passed into funciton to be changed

let selectElement = el => {
  el.target.classList.remove("dwuijb-background-highlight");

  //if window doesn't have height class added then add height class

  if (
    document.getElementById("dwuijb-tool-window").classList !== "set-height"
  ) {
    document.getElementById("dwuijb-tool-window").classList.add("set-height");
  }

  //if background color was chosen on previous selection then this removes it for the next element to be selected and sets the defaut color picker back to white

  document.getElementById("dwuijb-tool-bg-color").value = "#000000";
  document
    .getElementById("dwuijb-background-container")
    .classList.add("dwuijb-hide");
  document
    .getElementById("dwuijb-background-container")
    .classList.remove("dwuijb-bg-color-applied");
  document.getElementById("dwuijb-insert-bg").classList.remove("dwuijb-hide");

  //get initial x and y position on click new element

  let initialTransform = el.target.style.transform;

  //if the clicked element has no transform applied then set at zero

  if (initialTransform === "") {
    document.getElementById("dwuijb-new-x-transform-value").textContent = "";
    document.getElementById("dwuijb-new-y-transform-value").textContent = "";

    document.getElementById("dwuijb-element-slider-x").value = "inherit";
    document.getElementById("dwuijb-element-slider-y").value = "inherit";
  } else {
    //if element clicked has had transform already set then use that transform as the initial value so when click apply it doesn't set to zero

    let splitTransform = initialTransform.split("(", [2]);
    let splitTransformOne = splitTransform[1].split(",", [2]);
    let splitTransformTwo = splitTransformOne[1].split(")", [2]);
    let splitTransformThree = splitTransformTwo[0].split(" ", [2]);

    let xInitPosition = splitTransformOne[0];
    let yInitPosition = splitTransformThree[1];

    let xInitRemovePX = xInitPosition.split("px", [2])[0];
    let yInitRemovePX = yInitPosition.split("px", [2])[0];

    document.getElementById(
      "dwuijb-new-x-transform-value"
    ).textContent = `${xInitPosition}`;
    document.getElementById(
      "dwuijb-new-y-transform-value"
    ).textContent = `${yInitPosition}`;

    document.getElementById(
      "dwuijb-element-slider-x"
    ).value = `${xInitRemovePX}`;
    document.getElementById(
      "dwuijb-element-slider-y"
    ).value = `${yInitRemovePX}`;
  }

  //this gets the background color of a clicked on item - it also converts the rgba value into hexidecimal as that is only value allowed by color picker

  let getBgColor = el => {
    let elementColor = getComputedStyle(el.target).getPropertyValue(
      "background-color"
    );
    let removeChars = elementColor.replace("rgb(", "");
    let removeCharsTwo = removeChars.replace('"', "");
    let removeCharsThree = removeCharsTwo.replace(")", "");
    let removeCharsFour = removeCharsThree.replace(" ", "");
    let colorArray = removeCharsFour.split(",", [3]);

    function componentToHex(elementColor) {
      var hex = elementColor.toString(16);
      return hex.length == 1 ? "0" + hex : hex;
    }

    function rgbToHex(r, g, b) {
      return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    let hexColour = rgbToHex(
      parseInt(colorArray[0]),
      parseInt(colorArray[1]),
      parseInt(colorArray[2])
    );

    //set color

    document.getElementById("dwuijb-tool-bg-color").value = hexColour;
    document.getElementById(
      "dwuijb-tool-input-cover"
    ).style.background = hexColour;
  };

  //this gets the background color of a clicked on item - it also converts the rgba value into hexidecimal as that is only value allowed by color picker

  let getTextBgColor = el => {
    let elementColor = getComputedStyle(el.target).getPropertyValue(
      "background-color"
    );
    let removeChars = elementColor.replace("rgb(", "");
    let removeCharsTwo = removeChars.replace('"', "");
    let removeCharsThree = removeCharsTwo.replace(")", "");
    let removeCharsFour = removeCharsThree.replace(" ", "");
    let colorArray = removeCharsFour.split(",", [3]);

    function componentToHex(elementColor) {
      var hex = elementColor.toString(16);
      return hex.length == 1 ? "0" + hex : hex;
    }

    function rgbToHex(r, g, b) {
      return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    let hexColour = rgbToHex(
      parseInt(colorArray[0]),
      parseInt(colorArray[1]),
      parseInt(colorArray[2])
    );

    //set color

    document.getElementById(
      "dwuijb-tool-text-input-cover"
    ).style.background = hexColour;
  };

  //  this inserts fields to manipulate element
  let elementType = el.target.nodeName;

  // functions to amend color

  let insertTextBackgroundContainer = () => {
    document
      .getElementById("dwuijb-overall-text-bg-container")
      .classList.remove("dwuijb-hide");
  };

  let removeTextBackgroundContainer = () => {
    document
      .getElementById("dwuijb-overall-text-bg-container")
      .classList.add("dwuijb-hide");
  };

  let insertTextBackground = () => {
    document
      .getElementById("dwuijb-insert-text-bg")
      .classList.add("dwuijb-hide");
    document
      .getElementById("dwuijb-text-background-container")
      .classList.remove("dwuijb-hide");
    document
      .getElementById("dwuijb-text-background-container")
      .classList.add("dwuijb-bg-color-applied");
    document.getElementById(
      "dwuijb-tool-text-input-cover"
    ).style.background = document.getElementById(
      "dwuijb-tool-text-bg-color"
    ).value;
  };

  document
    .getElementById("dwuijb-insert-text-bg")
    .addEventListener("click", insertTextBackground);

  let removeTextBackground = el => {
    document
      .getElementById("dwuijb-text-background-container")
      .classList.add("dwuijb-hide");
    document
      .getElementById("dwuijb-insert-text-bg")
      .classList.remove("dwuijb-hide");
    document
      .getElementById("dwuijb-text-background-container")
      .classList.remove("dwuijb-bg-color-applied");
  };

  document
    .getElementById("dwuijb-remove-text-bg-x")
    .addEventListener("click", removeTextBackground);

  // // adds on click to the flaoting div in front of the html color picker and launches color picker
  document
    .getElementById("dwuijb-tool-text-input-cover")
    .addEventListener("click", function() {
      document.getElementById("dwuijb-tool-text-bg-color").click();
    });

  //insert background color tool if div element

  let insertBackgroundTool = () => {
    document.getElementById("dwuijb-insert-bg").classList.add("dwuijb-hide");
    document
      .getElementById("dwuijb-background-container")
      .classList.remove("dwuijb-hide");
    document
      .getElementById("dwuijb-background-container")
      .classList.add("dwuijb-bg-color-applied");
    document.getElementById(
      "dwuijb-tool-input-cover"
    ).style.background = document.getElementById("dwuijb-tool-bg-color").value;

    removeImageTool();
    removeImgTool();
    insertGradientContainer();

    // // adds on click to the flaoting div in front of the html color picker and launches color picker
    document
      .getElementById("dwuijb-tool-input-cover")
      .addEventListener("click", function() {
        document.getElementById("dwuijb-tool-bg-color").click();
      });

    return (gradientColorArray = []);
  };

  // // when color selected this applies the chosen color to the floating div in front of it - bg color for text element

  document
    .getElementById("dwuijb-tool-text-bg-color")
    .addEventListener("change", function() {
      document.getElementById(
        "dwuijb-tool-text-input-cover"
      ).style.background = document.getElementById(
        "dwuijb-tool-text-bg-color"
      ).value;
    });

  // // when color selected this applies the chosen color to the floating div in front of it - font-color

  document
    .getElementById("dwuijb-tool-input-color")
    .addEventListener("change", function() {
      document.getElementById(
        "dwuijb-tool-text-color-cover"
      ).style.background = document.getElementById(
        "dwuijb-tool-input-color"
      ).value;
    });

  // // when color selected this applies the chosen color to the floating div in front of it - bg color for div

  document
    .getElementById("dwuijb-tool-bg-color")
    .addEventListener("change", function() {
      document.getElementById(
        "dwuijb-tool-input-cover"
      ).style.background = document.getElementById(
        "dwuijb-tool-bg-color"
      ).value;
    });

  // adds on click to the flaoting div in front of the html color picker and launches color picker - for font color

  document
    .getElementById("dwuijb-tool-text-color-cover")
    .addEventListener("click", function() {
      document.getElementById("dwuijb-tool-input-color").click();
    });

  //remove bg color tool

  let removeBackgroundTool = () => {
    document
      .getElementById("dwuijb-overall-text-bg-container")
      .classList.add("dwuijb-hide");
    document
      .getElementById("dwuijb-background-container")
      .classList.add("dwuijb-hide");
    document.getElementById("dwuijb-insert-bg").classList.remove("dwuijb-hide");
    document
      .getElementById("dwuijb-background-container")
      .classList.remove("dwuijb-bg-color-applied");
    removeGradientContainer();
    removeGradient();
    removeGradientContainer2();
    removeGradient2();

    return (gradientColorArray = []);
  };

  //insert gradient container

  let insertGradientContainer = () => {
    document
      .getElementById("dwuijb-overall-gradient-container")
      .classList.remove("dwuijb-hide");
  };

  //insert gradient tool

  let insertGradient = () => {
    document
      .getElementById("dwuijb-gradient-container")
      .classList.remove("dwuijb-hide");

    //insert gradient direction

    document
      .getElementById("dwuijb-gradient-direction-container")
      .classList.remove("dwuijb-hide");

    //hide the insert gradient button

    document
      .getElementById("dwuijb-insert-gradient-add")
      .classList.add("dwuijb-hide");

    //insert gradient 2 container

    insertGradientContainer2();

    // adds on click to the flaoting div in front of the html color picker and launches color picker

    document
      .getElementById("dwuijb-tool-input-cover-gradient")
      .addEventListener("click", function() {
        document.getElementById("dwuijb-tool-gradient-color").click();
      });

    return (gradientColorArray = "one gradient");
  };

  // // when color selected this applies the chosen color to the floating div in front of it

  document
    .getElementById("dwuijb-tool-gradient-color")
    .addEventListener("change", function() {
      document.getElementById(
        "dwuijb-tool-input-cover-gradient"
      ).style.background = document.getElementById(
        "dwuijb-tool-gradient-color"
      ).value;
    });

  document
    .getElementById("dwuijb-insert-gradient")
    .addEventListener("click", insertGradient);

  //remove gradient tool

  let removeGradient = () => {
    document
      .getElementById("dwuijb-gradient-container")
      .classList.add("dwuijb-hide");

    //remove gradient direction

    document
      .getElementById("dwuijb-gradient-direction-container")
      .classList.add("dwuijb-hide");

    //insert the insert gradient button

    document
      .getElementById("dwuijb-insert-gradient-add")
      .classList.remove("dwuijb-hide");

    removeGradientContainer2();

    return (gradientColorArray = []);
  };

  document
    .getElementById("dwuijb-remove-gradient-x")
    .addEventListener("click", removeGradient);

  //remove gradient container

  let removeGradientContainer = () => {
    document
      .getElementById("dwuijb-overall-gradient-container")
      .classList.add("dwuijb-hide");

    removeGradientContainer2();
  };

  //insert gradient container

  let insertGradientContainer2 = () => {
    document
      .getElementById("dwuijb-overall-gradient-2-container")
      .classList.remove("dwuijb-hide");
  };

  //insert gradient tool

  let insertGradient2 = () => {
    document
      .getElementById("dwuijb-gradient-2-container")
      .classList.remove("dwuijb-hide");

    //hide the insert gradient button

    document
      .getElementById("dwuijb-insert-gradient-2")
      .classList.add("dwuijb-hide");

    // adds on click to the flaoting div in front of the html color picker and launches color picker

    document
      .getElementById("dwuijb-tool-input-cover-gradient-2")
      .addEventListener("click", function() {
        document.getElementById("dwuijb-tool-gradient-2-color").click();
      });

    return (gradientColorArray = "two gradients");
  };

  // // when color selected this applies the chosen color to the floating div in front of it

  document
    .getElementById("dwuijb-tool-gradient-2-color")
    .addEventListener("change", function() {
      document.getElementById(
        "dwuijb-tool-input-cover-gradient-2"
      ).style.background = document.getElementById(
        "dwuijb-tool-gradient-2-color"
      ).value;
    });

  document
    .getElementById("dwuijb-insert-gradient-2")
    .addEventListener("click", insertGradient2);

  //remove gradient tool

  let removeGradient2 = () => {
    document
      .getElementById("dwuijb-gradient-2-container")
      .classList.add("dwuijb-hide");

    //insert the insert gradient button

    document
      .getElementById("dwuijb-insert-gradient-2")
      .classList.remove("dwuijb-hide");

    return (gradientColorArray = "one gradient");
  };

  document
    .getElementById("dwuijb-remove-gradient-2")
    .addEventListener("click", removeGradient2);

  //remove gradient container

  let removeGradientContainer2 = () => {
    document
      .getElementById("dwuijb-overall-gradient-2-container")
      .classList.add("dwuijb-hide");
  };

  //insert img color tool

  let insertImgTool = () => {
    document.getElementById("dwuijb-insert-img").classList.add("dwuijb-hide");
    document
      .getElementById("dwuijb-img-container")
      .classList.remove("dwuijb-hide");
    document.getElementById("dwuijb-img-thumb").src =
      "https://images.unsplash.com/photo-1569597137793-1873e6a6cc15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80.jpg";
    // document.getElementById('dwuijb-img-container').classList.add('dwuijb-bg-color-applied');
    removeBackgroundTool();
    removeGradientContainer();
    removeGradientContainer2();
  };

  //remove  img color tool

  let removeImgTool = () => {
    document
      .getElementById("dwuijb-insert-img")
      .classList.remove("dwuijb-hide");
    document
      .getElementById("dwuijb-img-container")
      .classList.add("dwuijb-hide");
    document.getElementById("dwuijb-img-thumb").src = "";
    document
      .getElementById("dwuijb-img-container")
      .classList.remove("dwuijb-bg-color-applied");
  };

  let insertImageTool = () => {
    document
      .getElementById("dwuijb-img-window")
      .classList.remove("dwuijb-hide");
    removeBackgroundTool();
    removeGradientContainer();
    removeGradientContainer2();
    insertUploadFunc();
  };

  //remove the intro text and video

  const removeIntro = () => {
    document.getElementById("dwuijb-tool-intro-text").textContent = "";
    document
      .getElementById("dwuijb-tool-intro-emoji")
      .classList.add("dwuijb-hide");
  };

  //This changes divs / sections / footers / headers etc. ------------------------------------------------------------------------------------------------------------------------------------

  // this determines the element which was clicked on - different options are then added into the tool window depending on the  element type e.g. text, div, button

  if (
    elementType === "DIV" ||
    elementType === "MAIN" ||
    elementType === "SECTION" ||
    elementType === "FOOTER" ||
    elementType === "HEADER" ||
    elementType === "NAV" ||
    elementType === "BODY" ||
    elementType === "HTML" ||
    elementType === "IFRAME"
  ) {
    //remove intro text
    removeIntro();

    //remove dwuijb-hide on the tools
    document
      .getElementById("dwuijb-clicked-on-text")
      .classList.remove("dwuijb-hide");
    document.getElementById("dwuijb-font-change").classList.add("dwuijb-hide");
    document
      .getElementById("dwuijb-show-hide-color")
      .classList.add("dwuijb-hide");
    document.getElementById("dwuijb-font-size").classList.add("dwuijb-hide");
    document
      .getElementById("dwuijb-input-border-container")
      .classList.remove("dwuijb-hide");
    document
      .getElementById("dwuijb-submit-button")
      .classList.remove("dwuijb-hide");
    document
      .getElementById("dwuijb-overall-bg-container")
      .classList.remove("dwuijb-hide");
    document
      .getElementById("dwuijb-show-hide-img")
      .classList.remove("dwuijb-hide");
    document
      .getElementById("dwuijb-img-width-container")
      .classList.add("dwuijb-hide");
    document
      .getElementById("dwuijb-show-hide-img")
      .classList.remove("dwuijb-img-full-width");

    removeTextBackgroundContainer();

    //insert and remove the image tool on click

    document
      .getElementById("dwuijb-insert-img")
      .addEventListener("click", insertImgTool);
    document
      .getElementById("dwuijb-remove-img")
      .addEventListener("click", removeImgTool);

    //This inserts BG color or backgroound img if one is set - if not bg color is set to white and bg tool hidden

    //if div has bg img set
    if (getComputedStyle(el.path[0]).background.includes("url")) {
      //unhide img tool and get the background img url - set this as the default bg image

      insertImgTool();
      let backgroundImg = getComputedStyle(el.path[0]).background;
      let backgroundImgSplit = backgroundImg.split('"', 2);
      document.getElementById("dwuijb-img-thumb").src = backgroundImgSplit[1];

      removeGradientContainer();
      removeGradient();
      removeGradientContainer2();
      removeGradient2();

      //insert the background tool if more than one background color is present
    } else if (getComputedStyle(el.path[0]).background.includes("gradient")) {
      removeImgTool();
      insertBackgroundTool();
      insertGradient();

      let gradientArray = getComputedStyle(el.path[0]).background;
      let removeRGBA = gradientArray.split(") repeat")[0];
      removeRGBA = removeRGBA.split("rgba(0, 0, 0, 0)")[1];

      //gets first gradient

      let firstGradient = removeRGBA.substring(
        removeRGBA.indexOf("rgb"),
        removeRGBA.indexOf(")") + 1
      );

      //gets second gradient

      let secondGradient = removeRGBA.split(firstGradient)[1];

      let secondGradientValue = secondGradient.substring(
        secondGradient.indexOf(" ") + 1,
        secondGradient.indexOf(")") + 1
      );

      //gets third gradient if there is one

      let thirdGradient = removeRGBA.split(secondGradientValue)[1];
      let thirdGradientValue;

      if (thirdGradient.includes("rgb")) {
        insertGradient2();

        thirdGradientValue = thirdGradient.substring(
          thirdGradient.indexOf(" ") + 1,
          thirdGradient.indexOf(")") + 1
        );
      } else {
        thirdGradientValue = null;
      }

      //this gets the gradient direction e.g. to right

      let gradientDirection;
      let gradientDropDown = document.getElementById(
        "dwuijb-gradient-direction"
      );

      //if direction is set in form 'to top right' then get the gradient direction

      if (
        getComputedStyle(el.path[0]).background.includes("right") ||
        getComputedStyle(el.path[0]).background.includes("left") ||
        getComputedStyle(el.path[0]).background.includes("bottom") ||
        getComputedStyle(el.path[0]).background.includes("top")
      ) {
        gradientDirection = removeRGBA.substring(
          removeRGBA.indexOf("(") + 1,
          removeRGBA.indexOf(",")
        );

        //if the gradient is set by degrees then the below gets the degree number
      } else if (getComputedStyle(el.path[0]).background.includes("deg")) {
        gradientDirection = removeRGBA.substring(
          removeRGBA.indexOf("(") + 1,
          removeRGBA.indexOf(",")
        );

        //remove deg so left with integer

        let removeDegrees = gradientDirection.split("d")[0];

        //the below converts the degree direction to written format and sets the UI selector at gradient direction

        if (removeDegrees >= 22.5 && removeDegrees < 67.5) {
          gradientDirection = "to right top";
        } else if (removeDegrees >= 67.5 && removeDegrees < 112.5) {
          gradientDirection = "to right";
        } else if (removeDegrees >= 112.5 && removeDegrees < 157.5) {
          gradientDirection = "to right bottom";
        } else if (removeDegrees >= 157.5 && removeDegrees < 202.5) {
          gradientDirection = "to bottom";
        } else if (removeDegrees >= 202.5 && removeDegrees < 247.5) {
          gradientDirection = "to left bottom";
        } else if (removeDegrees >= 247.5 && removeDegrees < 292.5) {
          gradientDirection = "to left";
        } else if (removeDegrees >= 292.5 && removeDegrees < 337.5) {
          gradientDirection = "to left top";
        } else {
          gradientDirection = "to top";
        }
      } else {
        //if no direction set then the default direction is to bottom

        gradientDirection = "to bottom";
      }

      //set direction in the UI on the gradient drop down

      gradientDropDown.value = gradientDirection;

      //This converts the color you clicked on from rgb into hexidecimal so element colour clicked on is automatically loaded as color picker value

      gradientColorArray = [firstGradient, secondGradientValue];

      if (thirdGradientValue !== null) {
        gradientColorArray.push(thirdGradientValue);
      }

      for (let i = 0; i < gradientColorArray.length; i++) {
        let removeChars = gradientColorArray[i].replace("rgb(", "");
        let removeCharsTwo = removeChars.replace('"', "");
        let removeCharsThree = removeCharsTwo.replace(")", "");
        let removeCharsFour = removeCharsThree.replace(" ", "");
        let colorArray = removeCharsFour.split(",", [3]);

        function componentToHex(elementColor) {
          var hex = elementColor.toString(16);
          return hex.length == 1 ? "0" + hex : hex;
        }

        function rgbToHex(r, g, b) {
          return (
            "#" + componentToHex(r) + componentToHex(g) + componentToHex(b)
          );
        }

        gradientColorArray[i] = rgbToHex(
          parseInt(colorArray[0]),
          parseInt(colorArray[1]),
          parseInt(colorArray[2])
        );
      }

      //gets the values of gradient if two colors

      if (gradientColorArray.length === 2) {
        document.getElementById("dwuijb-tool-bg-color").value =
          gradientColorArray[0];
        document.getElementById("dwuijb-tool-input-cover").style.background =
          gradientColorArray[0];
        document.getElementById("dwuijb-tool-gradient-color").value =
          gradientColorArray[1];
        document.getElementById(
          "dwuijb-tool-input-cover-gradient"
        ).style.background = gradientColorArray[1];
      } else {
        //gets the values of gradient if three colors

        document.getElementById("dwuijb-tool-bg-color").value =
          gradientColorArray[0];
        document.getElementById("dwuijb-tool-input-cover").style.background =
          gradientColorArray[0];
        document.getElementById("dwuijb-tool-gradient-color").value =
          gradientColorArray[1];
        document.getElementById(
          "dwuijb-tool-input-cover-gradient"
        ).style.background = gradientColorArray[1];
        document.getElementById("dwuijb-tool-gradient-2-color").value =
          gradientColorArray[2];
        document.getElementById(
          "dwuijb-tool-input-cover-gradient-2"
        ).style.background = gradientColorArray[2];
      }

      //if no bg image or color set then set background img tool as white and hidden in UI. Background = none / inherit
    } else if (
      getComputedStyle(el.path[0]).backgroundColor === "rgba(0, 0, 0, 0)"
    ) {
      removeImgTool();
      removeBackgroundTool();

      //if div has one bg color
    } else {
      insertBackgroundTool();
      removeGradient();
      getBgColor(el);
      removeImgTool();
      document.getElementById(
        "dwuijb-tool-input-cover"
      ).style.background = document.getElementById(
        "dwuijb-tool-bg-color"
      ).value;
    }

    //insert or remove background

    document
      .getElementById("dwuijb-insert-bg")
      .addEventListener("click", insertBackgroundTool);
    document
      .getElementById("dwuijb-remove-bg")
      .addEventListener("click", removeBackgroundTool);

    //insert or remove the image picker tool

    // insert the change image tool

    document
      .getElementById("dwuijb-img-thumb")
      .addEventListener("click", () => {
        insertImageTool();
      });

    //closes image tool on click of cross

    document
      .getElementById("dwuijb-exit-cross-img")
      .addEventListener("click", () => {
        removeImageTool();
      });

    // gets the border radius value

    let elBorderRadius = getComputedStyle(el.path[0]).borderRadius;
    let splitBorderString = elBorderRadius.split(" ");

    //this checks if the border radius value is set in pixels or % and returns px or % to array

    let borderArrayVal = [];

    for (let i = 0; i < splitBorderString.length; i++) {
      if (splitBorderString[i].includes("px")) {
        borderArrayVal[i] = "px";
      } else if (splitBorderString[i].includes("%")) {
        borderArrayVal[i] = "%";
      }
    }

    let radiusNumbers = elBorderRadius.match(/\d+/g).map(Number);

    let tlCorner = document.getElementById("dwuijb-border-value-tl");
    let trCorner = document.getElementById("dwuijb-border-value-tr");
    let brCorner = document.getElementById("dwuijb-border-value-br");
    let blCorner = document.getElementById("dwuijb-border-value-bl");
    let tlCornerValue = document.getElementById("dwuijb-pixels-tl");
    let trCornerValue = document.getElementById("dwuijb-pixels-tr");
    let brCornerValue = document.getElementById("dwuijb-pixels-br");
    let blCornerValue = document.getElementById("dwuijb-pixels-bl");

    //this inserts the border radius value and if percentage or pixel into the UI

    let numberBorders;

    //if only one radius set for all four corners then the below runs

    if (radiusNumbers.length === 1) {
      tlCorner.value = radiusNumbers[0];
      trCorner.value = radiusNumbers[0];
      brCorner.value = radiusNumbers[0];
      blCorner.value = radiusNumbers[0];
      tlCornerValue.textContent = borderArrayVal[0];
      trCornerValue.textContent = borderArrayVal[0];
      brCornerValue.textContent = borderArrayVal[0];
      blCornerValue.textContent = borderArrayVal[0];

      numberBorders = 1;

      //if two radii
    } else if (radiusNumbers.length === 2) {
      tlCorner.value = radiusNumbers[0];
      trCorner.value = radiusNumbers[1];
      brCorner.value = radiusNumbers[0];
      blCorner.value = radiusNumbers[1];
      tlCornerValue.textContent = borderArrayVal[0];
      trCornerValue.textContent = borderArrayVal[1];
      brCornerValue.textContent = borderArrayVal[0];
      blCornerValue.textContent = borderArrayVal[1];

      numberBorders = 2;

      //three radiuses
    } else if (radiusNumbers.length === 3) {
      tlCorner.value = radiusNumbers[0];
      trCorner.value = radiusNumbers[1];
      brCorner.value = radiusNumbers[2];
      blCorner.value = radiusNumbers[1];
      tlCornerValue.textContent = borderArrayVal[0];
      trCornerValue.textContent = borderArrayVal[1];
      brCornerValue.textContent = borderArrayVal[2];
      blCornerValue.textContent = borderArrayVal[1];

      numberBorders = 3;

      //four radiuses all different
    } else {
      tlCorner.value = radiusNumbers[0];
      trCorner.value = radiusNumbers[1];
      brCorner.value = radiusNumbers[2];
      blCorner.value = radiusNumbers[3];
      tlCornerValue.textContent = borderArrayVal[0];
      trCornerValue.textContent = borderArrayVal[1];
      brCornerValue.textContent = borderArrayVal[2];
      blCornerValue.textContent = borderArrayVal[3];

      numberBorders = 4;
    }

    // gets the padding value

    let elPadding = getComputedStyle(el.path[0]).padding;

    //split the margin values

    let elPad = elPadding.split(" ");

    let splitPadString = [];

    //loops over the array and removes pixels

    for (let i = 0; i < elPad.length; i++) {
      splitPadString[i] = elPad[i].replace("px", "");
    }

    let topPadding = document.getElementById("dwuijb-padding-value-top");
    let rightPadding = document.getElementById("dwuijb-padding-value-right");
    let bottomPadding = document.getElementById("dwuijb-padding-value-bottom");
    let leftPadding = document.getElementById("dwuijb-padding-value-left");

    //if only one padding set for all four sides then the below runs

    if (splitPadString.length === 1) {
      topPadding.value = splitPadString[0];
      rightPadding.value = splitPadString[0];
      bottomPadding.value = splitPadString[0];
      leftPadding.value = splitPadString[0];

      //if two padding
    } else if (splitPadString.length === 2) {
      topPadding.value = splitPadString[0];
      rightPadding.value = splitPadString[1];
      bottomPadding.value = splitPadString[0];
      leftPadding.value = splitPadString[1];

      //three padding
    } else if (splitPadString.length === 3) {
      topPadding.value = splitPadString[0];
      rightPadding.value = splitPadString[1];
      bottomPadding.value = splitPadString[2];
      leftPadding.value = splitPadString[1];

      //four padding values different
    } else if (splitPadString.length === 4) {
      topPadding.value = splitPadString[0];
      rightPadding.value = splitPadString[1];
      bottomPadding.value = splitPadString[2];
      leftPadding.value = splitPadString[3];
    }

    // gets the margin value

    let elementMargin = getComputedStyle(el.path[0]).margin;

    //split the margin values

    let arrayMargin = elementMargin.split(" ");

    let splitMarginString = [];

    //loops over the array and removes pixels

    for (let i = 0; i < arrayMargin.length; i++) {
      splitMarginString[i] = arrayMargin[i].replace("px", "");
    }

    //get the input fields to set the intial values

    let topMargin = document.getElementById("dwuijb-margin-value-top");
    let rightMargin = document.getElementById("dwuijb-margin-value-right");
    let bottomMargin = document.getElementById("dwuijb-margin-value-bottom");
    let leftMargin = document.getElementById("dwuijb-margin-value-left");

    //if only one margin set for all four sides then the below runs

    if (splitMarginString.length === 1) {
      topMargin.value = splitMarginString[0];
      rightMargin.value = splitMarginString[0];
      bottomMargin.value = splitMarginString[0];
      leftMargin.value = splitMarginString[0];

      //if two margin
    } else if (splitMarginString.length === 2) {
      topMargin.value = splitMarginString[0];
      rightMargin.value = splitMarginString[1];
      bottomMargin.value = splitMarginString[0];
      leftMargin.value = splitMarginString[1];

      //three margin
    } else if (splitMarginString.length === 3) {
      topMargin.value = splitMarginString[0];
      rightMargin.value = splitMarginString[1];
      bottomMargin.value = splitMarginString[2];
      leftMargin.value = splitMarginString[1];

      //four margin values different
    } else if (splitMarginString.length === 4) {
      topMargin.value = splitMarginString[0];
      rightMargin.value = splitMarginString[1];
      bottomMargin.value = splitMarginString[2];
      leftMargin.value = splitMarginString[3];
    }

    // gets new x and y positions

    let xPositionElement = document.getElementById("dwuijb-element-slider-x");
    let newXPosition = document.getElementById("dwuijb-new-x-transform-value");

    xPositionElement.oninput = function() {
      newXPosition.textContent = this.value + "px";
    };

    let yPositionElement = document.getElementById("dwuijb-element-slider-y");
    let newYPosition = document.getElementById("dwuijb-new-y-transform-value");

    yPositionElement.oninput = function() {
      newYPosition.textContent = this.value + "px";
    };

    //on click of apply button get changes

    document
      .getElementById("dwuijb-button-apply")
      .addEventListener("click", () => {
        // get x and y positions
        let xPosition = document.getElementById("dwuijb-element-slider-x")
          .value;
        let yPosition = document.getElementById("dwuijb-element-slider-y")
          .value;

        //function to apply changes

        //run apply change function
        applyChange(xPosition, yPosition);
      });

    applyChange = function(xPosition, yPosition) {
      // el.preventDefault();
      // el.stopImmediatePropagation();

      //sets border radius - the border is set in pixels or % depending on how the site was coded. It allows for one corner to be done in pixels and another corner of same div to be done as %

      if (numberBorders === 1) {
        el.target.style.borderRadius = `${tlCorner.value}${borderArrayVal[0]} ${trCorner.value}${borderArrayVal[0]} ${brCorner.value}${borderArrayVal[0]} ${blCorner.value}${borderArrayVal[0]}`;
      } else if (numberBorders === 2) {
        el.target.style.borderRadius = `${tlCorner.value}${borderArrayVal[0]} ${trCorner.value}${borderArrayVal[1]} ${brCorner.value}${borderArrayVal[0]} ${blCorner.value}${borderArrayVal[1]}`;
      } else if (numberBorders === 3) {
        el.target.style.borderRadius = `${tlCorner.value}${borderArrayVal[0]} ${trCorner.value}${borderArrayVal[1]} ${brCorner.value}${borderArrayVal[2]} ${blCorner.value}${borderArrayVal[1]}`;
      } else if (numberBorders === 4) {
        el.target.style.borderRadius = `${tlCorner.value}${borderArrayVal[0]} ${trCorner.value}${borderArrayVal[1]} ${brCorner.value}${borderArrayVal[2]} ${blCorner.value}${borderArrayVal[3]}`;
      }

      //set padding

      el.target.style.padding = `${topPadding.value}px ${rightPadding.value}px ${bottomPadding.value}px ${leftPadding.value}px`;

      //set margin

      el.target.style.margin = `${topMargin.value}px ${rightMargin.value}px ${bottomMargin.value}px ${leftMargin.value}px`;

      el.target.style.transform = `translate(${xPosition}px, ${yPosition}px)`;

      //if user selects bg color then color applied

      if (
        document
          .getElementById("dwuijb-background-container")
          .classList.contains("dwuijb-bg-color-applied")
      ) {
        let bgColor = document.getElementById("dwuijb-tool-bg-color").value;
        el.target.style.background = bgColor;
        el.target.style.backgroundColor = bgColor;
      } else if (document.getElementById("dwuijb-img-container")) {
        //this gets the image that was clicked on in the UI and inserts it into tool window

        let initialImg = document.getElementById("dwuijb-img-thumb");
        el.target.style.background = `url(${initialImg.src})`;
        el.target.style.backgroundSize = `cover`;
        el.target.style.backgroundPosition = `center`;

        return (gradientColorArray = []);
      } else {
        //if bg removed then the inherit style is applied
        el.target.style.background = "inherit";
        el.target.style.backgroundColor = "inherit";

        return (gradientColorArray = []);
      }

      let gradientDir = document.getElementById("dwuijb-gradient-direction");

      if (
        gradientColorArray.length === 2 ||
        gradientColorArray === "one gradient"
      ) {
        let bgColorOne = document.getElementById("dwuijb-tool-bg-color").value;
        let bgColorTwo = document.getElementById("dwuijb-tool-gradient-color")
          .value;

        el.target.style.background = `linear-gradient(${gradientDir.value}, ${bgColorOne}, ${bgColorTwo})`;
      } else if (
        gradientColorArray.length === 3 ||
        gradientColorArray === "two gradients"
      ) {
        let bgColorOne = document.getElementById("dwuijb-tool-bg-color").value;
        let bgColorTwo = document.getElementById("dwuijb-tool-gradient-color")
          .value;
        let bgColorThree = document.getElementById(
          "dwuijb-tool-gradient-2-color"
        ).value;
        el.target.style.background = `linear-gradient(${gradientDir.value},${bgColorOne}, ${bgColorTwo}, ${bgColorThree})`;
      }

      //this adds a class to all elements which have had apply button pressed on them to allow code changes to be downloaded

      el.path[0].classList.add(`dwuijb-amended-element`);
    };
  }

  //This changes images ------------------------------------------------------------------------------------------------------------------------------------
  else if (
    elementType === "IMG" ||
    elementType === "SVG" ||
    elementType === "PATH" ||
    elementType === "FIGURE" ||
    elementType === "VIDEO" 
  ) {

    console.log('test')
    //remove intro text

    removeIntro();

    //remove dwuijb-hide on the tools
    document
      .getElementById("dwuijb-clicked-on-text")
      .classList.remove("dwuijb-hide");
    document.getElementById("dwuijb-font-change").classList.add("dwuijb-hide");
    document
      .getElementById("dwuijb-show-hide-color")
      .classList.add("dwuijb-hide");
    document.getElementById("dwuijb-font-size").classList.add("dwuijb-hide");
    document
      .getElementById("dwuijb-input-border-container")
      .classList.remove("dwuijb-hide");
    document
      .getElementById("dwuijb-submit-button")
      .classList.remove("dwuijb-hide");
    document
      .getElementById("dwuijb-overall-bg-container")
      .classList.add("dwuijb-hide");
    document
      .getElementById("dwuijb-show-hide-img")
      .classList.remove("dwuijb-hide");
    document
      .getElementById("dwuijb-img-width-container")
      .classList.remove("dwuijb-hide");
    document
      .getElementById("dwuijb-show-hide-img")
      .classList.add("dwuijb-img-full-width");

    // removeTextBackgroundContainer();

    insertImgTool();

    //insert and remove the image tool on click

    document
      .getElementById("dwuijb-insert-img")
      .addEventListener("click", insertImgTool);
    document
      .getElementById("dwuijb-remove-img")
      .addEventListener("click", removeImgTool);

    //this gets the image that was clicked on in the UI and inserts it into tool window

    let initialImg = document.getElementById("dwuijb-img-thumb");
    initialImg.src = el.target.src;

    // insert the change image tool

    document
      .getElementById("dwuijb-img-thumb")
      .addEventListener("click", () => {
        insertImageTool();
      });

    //closes image tool on click of cross

    document
      .getElementById("dwuijb-exit-cross-img")
      .addEventListener("click", () => {
        removeImageTool();
      });

    // gets the border radius value

    let elBorderRadius = getComputedStyle(el.path[0]).borderRadius;
    let splitBorderString = elBorderRadius.split(" ");
    let radiusNumbers = [];

    //this checks if the border radius value is set in pixels or % and returns px or % to array

    let borderArrayVal = [];

    for (let i = 0; i < splitBorderString.length; i++) {
      if (splitBorderString[i].includes("px")) {
        radiusNumbers.push(splitBorderString[i].split("px")[0]);
        borderArrayVal[i] = "px";
      } else if (splitBorderString[i].includes("%")) {
        radiusNumbers.push(splitBorderString[i].split("%")[0]);
        borderArrayVal[i] = "%";
      }
    }

    for (let i = 0; i < splitBorderString; i++) {
      if (splitBorderString[i].includes(".")) {
        splitBorderString[i] = splitBorderString[i] + splitBorderString[i++];
      }
    }

    let tlCorner = document.getElementById("dwuijb-border-value-tl");
    let trCorner = document.getElementById("dwuijb-border-value-tr");
    let brCorner = document.getElementById("dwuijb-border-value-br");
    let blCorner = document.getElementById("dwuijb-border-value-bl");
    let tlCornerValue = document.getElementById("dwuijb-pixels-tl");
    let trCornerValue = document.getElementById("dwuijb-pixels-tr");
    let brCornerValue = document.getElementById("dwuijb-pixels-br");
    let blCornerValue = document.getElementById("dwuijb-pixels-bl");

    //this inserts the border radius value and if percentage or pixel into the UI

    let numberBorders;

    //if only one radius set for all four corners then the below runs

    if (radiusNumbers.length === 1) {
      tlCorner.value = radiusNumbers[0];
      trCorner.value = radiusNumbers[0];
      brCorner.value = radiusNumbers[0];
      blCorner.value = radiusNumbers[0];
      tlCornerValue.textContent = borderArrayVal[0];
      trCornerValue.textContent = borderArrayVal[0];
      brCornerValue.textContent = borderArrayVal[0];
      blCornerValue.textContent = borderArrayVal[0];

      numberBorders = 1;

      //if two radii
    } else if (radiusNumbers.length === 2) {
      tlCorner.value = radiusNumbers[0];
      trCorner.value = radiusNumbers[1];
      brCorner.value = radiusNumbers[0];
      blCorner.value = radiusNumbers[1];
      tlCornerValue.textContent = borderArrayVal[0];
      trCornerValue.textContent = borderArrayVal[1];
      brCornerValue.textContent = borderArrayVal[0];
      blCornerValue.textContent = borderArrayVal[1];

      numberBorders = 2;

      //three radiuses
    } else if (radiusNumbers.length === 3) {
      tlCorner.value = radiusNumbers[0];
      trCorner.value = radiusNumbers[1];
      brCorner.value = radiusNumbers[2];
      blCorner.value = radiusNumbers[1];
      tlCornerValue.textContent = borderArrayVal[0];
      trCornerValue.textContent = borderArrayVal[1];
      brCornerValue.textContent = borderArrayVal[2];
      blCornerValue.textContent = borderArrayVal[1];

      numberBorders = 3;

      //four radiuses all different
    } else {
      tlCorner.value = radiusNumbers[0];
      trCorner.value = radiusNumbers[1];
      brCorner.value = radiusNumbers[2];
      blCorner.value = radiusNumbers[3];
      tlCornerValue.textContent = borderArrayVal[0];
      trCornerValue.textContent = borderArrayVal[1];
      brCornerValue.textContent = borderArrayVal[2];
      blCornerValue.textContent = borderArrayVal[3];

      numberBorders = 4;
    }

    // gets the padding value

    let elPadding = getComputedStyle(el.path[0]).padding;
    let splitPaddingString = elPadding.match(/\d+/g).map(Number);

    let topPadding = document.getElementById("dwuijb-padding-value-top");
    let rightPadding = document.getElementById("dwuijb-padding-value-right");
    let bottomPadding = document.getElementById("dwuijb-padding-value-bottom");
    let leftPadding = document.getElementById("dwuijb-padding-value-left");

    //if only one padding set for all four sides then the below runs

    if (splitPaddingString.length === 1) {
      topPadding.value = splitPaddingString[0];
      rightPadding.value = splitPaddingString[0];
      bottomPadding.value = splitPaddingString[0];
      leftPadding.value = splitPaddingString[0];

      //if two padding
    } else if (splitPaddingString.length === 2) {
      topPadding.value = splitPaddingString[0];
      rightPadding.value = splitPaddingString[1];
      bottomPadding.value = splitPaddingString[0];
      leftPadding.value = splitPaddingString[1];

      //three padding
    } else if (splitPaddingString.length === 3) {
      topPadding.value = splitPaddingString[0];
      rightPadding.value = splitPaddingString[1];
      bottomPadding.value = splitPaddingString[2];
      leftPadding.value = splitPaddingString[1];

      //four padding values different
    } else if (splitPaddingString.length === 4) {
      topPadding.value = splitPaddingString[0];
      rightPadding.value = splitPaddingString[1];
      bottomPadding.value = splitPaddingString[2];
      leftPadding.value = splitPaddingString[3];
    }

    // gets the margin value

    let elementMargin = getComputedStyle(el.path[0]).margin;

    //split the margin values

    let arrayMargin = elementMargin.split(" ");

    let splitMarginString = [];

    //loops over the array and removes pixels

    for (let i = 0; i < arrayMargin.length; i++) {
      splitMarginString[i] = arrayMargin[i].replace("px", "");
    }

    //get the input fields to set the intial values

    let topMargin = document.getElementById("dwuijb-margin-value-top");
    let rightMargin = document.getElementById("dwuijb-margin-value-right");
    let bottomMargin = document.getElementById("dwuijb-margin-value-bottom");
    let leftMargin = document.getElementById("dwuijb-margin-value-left");

    //if only one margin set for all four sides then the below runs

    if (splitMarginString.length === 1) {
      topMargin.value = splitMarginString[0];
      rightMargin.value = splitMarginString[0];
      bottomMargin.value = splitMarginString[0];
      leftMargin.value = splitMarginString[0];

      //if two margin
    } else if (splitMarginString.length === 2) {
      topMargin.value = splitMarginString[0];
      rightMargin.value = splitMarginString[1];
      bottomMargin.value = splitMarginString[0];
      leftMargin.value = splitMarginString[1];

      //three margin
    } else if (splitMarginString.length === 3) {
      topMargin.value = splitMarginString[0];
      rightMargin.value = splitMarginString[1];
      bottomMargin.value = splitMarginString[2];
      leftMargin.value = splitMarginString[1];

      //four margin values different
    } else if (splitMarginString.length === 4) {
      topMargin.value = splitMarginString[0];
      rightMargin.value = splitMarginString[1];
      bottomMargin.value = splitMarginString[2];
      leftMargin.value = splitMarginString[3];
    }

    //set image width

    //get img width clicked on

    const initialWidth = getComputedStyle(el.path[0]).width;
    const imgWidth = document.getElementById("dwuijb-element-slider-width");

    //remove px from string

    const imgWidthNoPx = initialWidth.split("px", [1]);

    //set the slider to width position

    imgWidth.value = imgWidthNoPx;

    //show initial width

    let newImgWidth = document.getElementById("dwuijb-img-width-value");
    newImgWidth.textContent = `${initialWidth}`;

    //when slider moved show new width

    imgWidth.oninput = function(imgWidth) {
      newImgWidth.textContent = this.value + "px";
    };

    // gets new x and y positions

    let xPositionElement = document.getElementById("dwuijb-element-slider-x");
    let newXPosition = document.getElementById("dwuijb-new-x-transform-value");

    xPositionElement.oninput = function() {
      newXPosition.textContent = this.value + "px";
    };

    let yPositionElement = document.getElementById("dwuijb-element-slider-y");
    let newYPosition = document.getElementById("dwuijb-new-y-transform-value");

    yPositionElement.oninput = function() {
      newYPosition.textContent = this.value + "px";
    };

    //on click of apply button get changes

    document
      .getElementById("dwuijb-button-apply")
      .addEventListener("click", () => {
        //new image width

        var imgWidth = document.getElementById("dwuijb-img-width-value")
          .textContent;

        // get x and y positions
        let xPosition = document.getElementById("dwuijb-element-slider-x")
          .value;
        let yPosition = document.getElementById("dwuijb-element-slider-y")
          .value;

        //function to apply changes
        //run apply change function
        applyChange(imgWidth, xPosition, yPosition);
      });

    applyChange = function(imgWidth, xPosition, yPosition) {
      // el.preventDefault();
      // el.stopImmediatePropagation();

      //sets border radius - the border is set in pixels or % depending on how the site was coded. It allows for one corner to be done in pixels and another corner of same div to be done as %

      if (numberBorders === 1) {
        el.target.style.borderRadius = `${tlCorner.value}${borderArrayVal[0]} ${trCorner.value}${borderArrayVal[0]} ${brCorner.value}${borderArrayVal[0]} ${blCorner.value}${borderArrayVal[0]}`;
      } else if (numberBorders === 2) {
        el.target.style.borderRadius = `${tlCorner.value}${borderArrayVal[0]} ${trCorner.value}${borderArrayVal[1]} ${brCorner.value}${borderArrayVal[0]} ${blCorner.value}${borderArrayVal[1]}`;
      } else if (numberBorders === 3) {
        el.target.style.borderRadius = `${tlCorner.value}${borderArrayVal[0]} ${trCorner.value}${borderArrayVal[1]} ${brCorner.value}${borderArrayVal[2]} ${blCorner.value}${borderArrayVal[1]}`;
      } else if (numberBorders === 4) {
        el.target.style.borderRadius = `${tlCorner.value}${borderArrayVal[0]} ${trCorner.value}${borderArrayVal[1]} ${brCorner.value}${borderArrayVal[2]} ${blCorner.value}${borderArrayVal[3]}`;
      }

      //set padding

      el.target.style.padding = `${topPadding.value}px ${rightPadding.value}px ${bottomPadding.value}px ${leftPadding.value}px`;

      //set margin

      el.target.style.margin = `${topMargin.value}px ${rightMargin.value}px ${bottomMargin.value}px ${leftMargin.value}px`;

      //apply img width

      el.target.style.maxWidth = `${imgWidth}`;
      el.target.style.width = `${imgWidth}`;
      el.target.style.height = "auto";

      //applies x and y position

      el.target.style.transform = `translate(${xPosition}px, ${yPosition}px)`;

      //applies image change

      let widerImg = initialImg.src;

      el.target.src = widerImg;
      el.target.srcset = widerImg;

      document.getElementById(
        "dwuijb-download-link"
      ).value = `https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjg5MzA5fQ`;

      //this adds a class to all elements which have had apply button pressed on them to allow code changes to be downloaded
      el.path[0].classList.add(`dwuijb-amended-element`);
    };
  }

  // this determines the element which was clicked on - different options are then added into the tool window depending on the  element type e.g. text, div, button ------------------------------------------------------------

  //the below is for text elements
  else if (elementType === "A") {
    //remove intro text and video

    removeIntro();

    //remove dwuijb-hide on the tools we want to present
    document
      .getElementById("dwuijb-clicked-on-text")
      .classList.remove("dwuijb-hide");
    document
      .getElementById("dwuijb-font-change")
      .classList.remove("dwuijb-hide");
    document.getElementById("dwuijb-font-size").classList.remove("dwuijb-hide");
    document
      .getElementById("dwuijb-show-hide-color")
      .classList.remove("dwuijb-hide");
    document
      .getElementById("dwuijb-input-border-container")
      .classList.remove("dwuijb-hide");
    document
      .getElementById("dwuijb-submit-button")
      .classList.remove("dwuijb-hide");
    document
      .getElementById("dwuijb-show-hide-img")
      .classList.add("dwuijb-hide");
    document
      .getElementById("dwuijb-img-width-container")
      .classList.add("dwuijb-hide");
    document
      .getElementById("dwuijb-show-hide-img")
      .classList.remove("dwuijb-img-full-width");
    document
      .getElementById("dwuijb-overall-bg-container")
      .classList.add("dwuijb-hide");

    removeGradientContainer();
    removeGradientContainer2();

    insertTextBackgroundContainer();

    // gets the border radius value

    let elBorderRadius = getComputedStyle(el.path[0]).borderRadius;
    let splitBorderString = elBorderRadius.split(" ");

    //this checks if the border radius value is set in pixels or % and returns px or % to array

    let borderArrayVal = [];

    for (let i = 0; i < splitBorderString.length; i++) {
      if (splitBorderString[i].includes("px")) {
        borderArrayVal[i] = "px";
      } else if (splitBorderString[i].includes("%")) {
        borderArrayVal[i] = "%";
      }
    }

    let radiusNumbers = elBorderRadius.match(/\d+/g).map(Number);

    let tlCorner = document.getElementById("dwuijb-border-value-tl");
    let trCorner = document.getElementById("dwuijb-border-value-tr");
    let brCorner = document.getElementById("dwuijb-border-value-br");
    let blCorner = document.getElementById("dwuijb-border-value-bl");
    let tlCornerValue = document.getElementById("dwuijb-pixels-tl");
    let trCornerValue = document.getElementById("dwuijb-pixels-tr");
    let brCornerValue = document.getElementById("dwuijb-pixels-br");
    let blCornerValue = document.getElementById("dwuijb-pixels-bl");

    //this inserts the border radius value and if percentage or pixel into the UI

    let numberBorders;

    //if only one radius set for all four corners then the below runs

    if (radiusNumbers.length === 1) {
      tlCorner.value = radiusNumbers[0];
      trCorner.value = radiusNumbers[0];
      brCorner.value = radiusNumbers[0];
      blCorner.value = radiusNumbers[0];
      tlCornerValue.textContent = borderArrayVal[0];
      trCornerValue.textContent = borderArrayVal[0];
      brCornerValue.textContent = borderArrayVal[0];
      blCornerValue.textContent = borderArrayVal[0];

      numberBorders = 1;

      //if two radii
    } else if (radiusNumbers.length === 2) {
      tlCorner.value = radiusNumbers[0];
      trCorner.value = radiusNumbers[1];
      brCorner.value = radiusNumbers[0];
      blCorner.value = radiusNumbers[1];
      tlCornerValue.textContent = borderArrayVal[0];
      trCornerValue.textContent = borderArrayVal[1];
      brCornerValue.textContent = borderArrayVal[0];
      blCornerValue.textContent = borderArrayVal[1];

      numberBorders = 2;

      //three radiuses
    } else if (radiusNumbers.length === 3) {
      tlCorner.value = radiusNumbers[0];
      trCorner.value = radiusNumbers[1];
      brCorner.value = radiusNumbers[2];
      blCorner.value = radiusNumbers[1];
      tlCornerValue.textContent = borderArrayVal[0];
      trCornerValue.textContent = borderArrayVal[1];
      brCornerValue.textContent = borderArrayVal[2];
      blCornerValue.textContent = borderArrayVal[1];

      numberBorders = 3;

      //four radiuses all different
    } else {
      tlCorner.value = radiusNumbers[0];
      trCorner.value = radiusNumbers[1];
      brCorner.value = radiusNumbers[2];
      blCorner.value = radiusNumbers[3];
      tlCornerValue.textContent = borderArrayVal[0];
      trCornerValue.textContent = borderArrayVal[1];
      brCornerValue.textContent = borderArrayVal[2];
      blCornerValue.textContent = borderArrayVal[3];

      numberBorders = 4;
    }

    //sets div floating in front of font color picker to correct color

    document.getElementById(
      "dwuijb-tool-text-color-cover"
    ).style.background = getComputedStyle(el.path[0]).color;

    if (getComputedStyle(el.path[0]).backgroundColor === "rgba(0, 0, 0, 0)") {
      removeTextBackground();
      document.getElementById(
        "dwuijb-tool-text-input-cover"
      ).style.background = document.getElementById(
        "dwuijb-tool-text-bg-color"
      ).value;

      //if text element has a color set
    } else {
      removeImageTool();
      removeImgTool();
      insertTextBackground();
      getTextBgColor(el);
      document.getElementById(
        "dwuijb-tool-text-input-cover"
      ).style.background = document.getElementById(
        "dwuijb-tool-text-bg-color"
      ).value;
    }

    //This converts the color you clicked on from rgb into hexidecimal so element colour clicked on is automatically loaded as color picker value

    let elementColor = getComputedStyle(el.path[0]).color;
    let removeChars = elementColor.replace("rgb(", "");
    let removeCharsTwo = removeChars.replace('"', "");
    let removeCharsThree = removeCharsTwo.replace(")", "");
    let removeCharsFour = removeCharsThree.replace(" ", "");
    let colorArray = removeCharsFour.split(",", [3]);

    function componentToHex(elementColor) {
      var hex = elementColor.toString(16);
      return hex.length == 1 ? "0" + hex : hex;
    }

    function rgbToHex(r, g, b) {
      return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    let hexColour = rgbToHex(
      parseInt(colorArray[0]),
      parseInt(colorArray[1]),
      parseInt(colorArray[2])
    );

    //set color
    document.getElementById("dwuijb-tool-input-color").value = hexColour;

    //get text value
    let getInnerText = el.path[0].innerText;
    document.getElementById("dwuijb-tool-input-text").value = getInnerText;

    //this sets the initial font size of the font input field

    let initialFontSize = getComputedStyle(el.path[0]).fontSize;
    let initFontSize = document.getElementById("dwuijb-font-size-field");
    let removePX = initialFontSize.split("px", [1]);
    initFontSize.value = `${removePX}`;

    // gets new x and y positions

    let xPositionElement = document.getElementById("dwuijb-element-slider-x");
    let newXPosition = document.getElementById("dwuijb-new-x-transform-value");

    xPositionElement.oninput = function() {
      newXPosition.textContent = this.value + "px";
    };

    let yPositionElement = document.getElementById("dwuijb-element-slider-y");
    let newYPosition = document.getElementById("dwuijb-new-y-transform-value");

    yPositionElement.oninput = function() {
      newYPosition.textContent = this.value + "px";
    };

    //get font underline

    let fontDecoration = getComputedStyle(el.path[0]).textDecoration;
    let decorationBtn = document.getElementById("dwuijb-underline-icon");

    //if udnerlined then make btn active

    if (fontDecoration.includes("underline")) {
      decorationBtn.classList.add("active-font-decoration");
    } else {
      decorationBtn.classList.remove("active-font-decoration");
    }

    //add event listener to remove and add active class to btn
    decorationBtn.addEventListener("click", () => {
      if (fontDecoration.includes("underline")) {
        decorationBtn.classList.remove("active-font-decoration");

        fontDecoration = fontDecoration.replace(
          "underline solid",
          "none solid"
        );
      } else {
        decorationBtn.classList.add("active-font-decoration");
        return (fontDecoration = fontDecoration.replace(
          "none solid",
          "underline solid"
        ));
      }
    });

    //get font italic

    let fontStyle = getComputedStyle(el.path[0]).fontStyle;
    let italicBtn = document.getElementById("dwuijb-italic-icon");

    //if italic then make btn active

    if (fontStyle.includes("italic")) {
      italicBtn.classList.add("active-font-decoration");
    } else {
      italicBtn.classList.remove("active-font-decoration");
    }

    //add event listener to remove and add active class to btn

    italicBtn.addEventListener("click", () => {
      italicBtn.classList.add("active-font-decoration");

      if (fontStyle.includes("italic")) {
        italicBtn.classList.remove("active-font-decoration");
        return (fontStyle = fontStyle.replace("italic", "normal"));
      } else {
        italicBtn.classList.add("active-font-decoration");
        return (fontStyle = fontStyle.replace("normal", "italic"));
      }
    });

    //get font weight

    let fontWeight = parseInt(getComputedStyle(el.path[0]).fontWeight);
    let boldBtn = document.getElementById("dwuijb-bold-icon");
    boldBtn.classList.remove("active-font-decoration");

    //sets bold botton active or not active when clicked

    if (fontWeight < 600) {
      boldBtn.classList.remove("active-font-decoration");
    } else {
      boldBtn.classList.add("active-font-decoration");
    }

    //adds 300 if font-weight < 600 and removes 300 font weight otherwise

    boldBtn.addEventListener("click", () => {
      if (fontWeight <= 600) {
        boldBtn.classList.add("active-font-decoration");
        return (fontWeight = fontWeight + 300);
      } else {
        boldBtn.classList.remove("active-font-decoration");
        return (fontWeight = fontWeight - 300);
      }
    });

    // gets the padding value

    let elPadding = getComputedStyle(el.path[0]).padding;

    //split the margin values

    let elPad = elPadding.split(" ");

    let splitPadString = [];

    //loops over the array and removes pixels

    for (let i = 0; i < elPad.length; i++) {
      splitPadString[i] = elPad[i].replace("px", "");
    }

    let topPadding = document.getElementById("dwuijb-padding-value-top");
    let rightPadding = document.getElementById("dwuijb-padding-value-right");
    let bottomPadding = document.getElementById("dwuijb-padding-value-bottom");
    let leftPadding = document.getElementById("dwuijb-padding-value-left");

    //if only one padding set for all four sides then the below runs

    if (splitPadString.length === 1) {
      topPadding.value = splitPadString[0];
      rightPadding.value = splitPadString[0];
      bottomPadding.value = splitPadString[0];
      leftPadding.value = splitPadString[0];

      //if two padding
    } else if (splitPadString.length === 2) {
      topPadding.value = splitPadString[0];
      rightPadding.value = splitPadString[1];
      bottomPadding.value = splitPadString[0];
      leftPadding.value = splitPadString[1];

      //three padding
    } else if (splitPadString.length === 3) {
      topPadding.value = splitPadString[0];
      rightPadding.value = splitPadString[1];
      bottomPadding.value = splitPadString[2];
      leftPadding.value = splitPadString[1];

      //four padding values different
    } else if (splitPadString.length === 4) {
      topPadding.value = splitPadString[0];
      rightPadding.value = splitPadString[1];
      bottomPadding.value = splitPadString[2];
      leftPadding.value = splitPadString[3];
    }

    // gets the margin value

    // gets the margin value

    let elMargin = getComputedStyle(el.path[0]).margin;

    //split the margin values

    let arrayMargin = elMargin.split(" ");

    let splitMarginString = [];

    //loops over the array and removes pixels

    for (let i = 0; i < arrayMargin.length; i++) {
      splitMarginString[i] = arrayMargin[i].replace("px", "");
    }

    let topMargin = document.getElementById("dwuijb-margin-value-top");
    let rightMargin = document.getElementById("dwuijb-margin-value-right");
    let bottomMargin = document.getElementById("dwuijb-margin-value-bottom");
    let leftMargin = document.getElementById("dwuijb-margin-value-left");

    //if only one margin set for all four sides then the below runs

    if (splitMarginString.length === 1) {
      topMargin.value = splitMarginString[0];
      rightMargin.value = splitMarginString[0];
      bottomMargin.value = splitMarginString[0];
      leftMargin.value = splitMarginString[0];

      //if two margin
    } else if (splitMarginString.length === 2) {
      topMargin.value = splitMarginString[0];
      rightMargin.value = splitMarginString[1];
      bottomMargin.value = splitMarginString[0];
      leftMargin.value = splitMarginString[1];

      //three margin
    } else if (splitMarginString.length === 3) {
      topMargin.value = splitMarginString[0];
      rightMargin.value = splitMarginString[1];
      bottomMargin.value = splitMarginString[2];
      leftMargin.value = splitMarginString[1];

      //four margin values different
    } else if (splitMarginString.length === 4) {
      topMargin.value = splitMarginString[0];
      rightMargin.value = splitMarginString[1];
      bottomMargin.value = splitMarginString[2];
      leftMargin.value = splitMarginString[3];
    }

    //on click of apply button get changes

    document
      .getElementById("dwuijb-button-apply")
      .addEventListener("click", () => {
        //  get text changes
        let elementText = document.getElementById("dwuijb-tool-input-text")
          .value;

        // get color change
        let colorChange = document.getElementById("dwuijb-tool-input-color")
          .value;

        //get font size

        let fontSize = document.getElementById("dwuijb-font-size-field").value;

        // get x and y positions
        let xPosition = document.getElementById("dwuijb-element-slider-x")
          .value;
        let yPosition = document.getElementById("dwuijb-element-slider-y")
          .value;

        //function to apply changes

        //run apply change function
        applyChange(
          elementText,
          colorChange,
          fontSize,
          xPosition,
          yPosition,
          fontWeight,
          fontDecoration
        );
      });

    applyChange = function(
      elementText,
      colorChange,
      fontSize,
      xPosition,
      yPosition,
      fontWeight,
      fontDecoration
    ) {
      // el.preventDefault();
      // el.stopImmediatePropagation();

      //gets values from tool to be applied

      el.target.innerText = `${elementText}`;
      el.target.style.color = colorChange;
      el.target.style.fontSize = `${fontSize}px`;
      el.target.style.transform = `translate(${xPosition}px, ${yPosition}px)`;
      el.target.style.fontWeight = fontWeight;
      el.target.style.textDecoration = `${fontDecoration}`;
      el.target.style.fontStyle = `${fontStyle}`;

      //sets border radius - the border is set in pixels or % depending on how the site was coded. It allows for one corner to be done in pixels and another corner of same div to be done as %

      if (numberBorders === 1) {
        el.target.style.borderRadius = `${tlCorner.value}${borderArrayVal[0]} ${trCorner.value}${borderArrayVal[0]} ${brCorner.value}${borderArrayVal[0]} ${blCorner.value}${borderArrayVal[0]}`;
      } else if (numberBorders === 2) {
        el.target.style.borderRadius = `${tlCorner.value}${borderArrayVal[0]} ${trCorner.value}${borderArrayVal[1]} ${brCorner.value}${borderArrayVal[0]} ${blCorner.value}${borderArrayVal[1]}`;
      } else if (numberBorders === 3) {
        el.target.style.borderRadius = `${tlCorner.value}${borderArrayVal[0]} ${trCorner.value}${borderArrayVal[1]} ${brCorner.value}${borderArrayVal[2]} ${blCorner.value}${borderArrayVal[1]}`;
      } else if (numberBorders === 4) {
        el.target.style.borderRadius = `${tlCorner.value}${borderArrayVal[0]} ${trCorner.value}${borderArrayVal[1]} ${brCorner.value}${borderArrayVal[2]} ${blCorner.value}${borderArrayVal[3]}`;
      }

      if (
        document
          .getElementById("dwuijb-text-background-container")
          .classList.contains("dwuijb-bg-color-applied")
      ) {
        let bgColor = document.getElementById("dwuijb-tool-text-bg-color")
          .value;
        el.target.style.background = bgColor;
        el.target.style.backgroundColor = bgColor;
      } else {
        //if bg removed then the inherit style is applied
        el.target.style.background = "inherit";
        el.target.style.backgroundColor = "inherit";
        el.target.style.backgroundImage = "";
      }

      //set padding

      el.target.style.padding = `${topPadding.value}px ${rightPadding.value}px ${bottomPadding.value}px ${leftPadding.value}px`;

      //set margin

      el.target.style.margin = `${topMargin.value}px ${rightMargin.value}px ${bottomMargin.value}px ${leftMargin.value}px`;

      //this adds a class to all elements which have had apply button pressed on them - this class is used to download code changes

      el.path[0].classList.add(`dwuijb-amended-element`);
    };
  } else {

    console.log('test')
    //remove intro text and video

    removeIntro();

    //remove dwuijb-hide on the tools we want to present
    document
      .getElementById("dwuijb-clicked-on-text")
      .classList.remove("dwuijb-hide");
    document
      .getElementById("dwuijb-font-change")
      .classList.remove("dwuijb-hide");
    document.getElementById("dwuijb-font-size").classList.remove("dwuijb-hide");
    document
      .getElementById("dwuijb-show-hide-color")
      .classList.remove("dwuijb-hide");
    document
      .getElementById("dwuijb-input-border-container")
      .classList.add("dwuijb-hide");
    document
      .getElementById("dwuijb-submit-button")
      .classList.remove("dwuijb-hide");
    document
      .getElementById("dwuijb-show-hide-img")
      .classList.add("dwuijb-hide");
    document
      .getElementById("dwuijb-img-width-container")
      .classList.add("dwuijb-hide");
    document
      .getElementById("dwuijb-show-hide-img")
      .classList.remove("dwuijb-img-full-width");
    document
      .getElementById("dwuijb-overall-bg-container")
      .classList.add("dwuijb-hide");

    removeGradientContainer();
    removeGradientContainer2();

    insertTextBackgroundContainer();

    //sets div floating in front of font color picker to correct color

    document.getElementById(
      "dwuijb-tool-text-color-cover"
    ).style.background = getComputedStyle(el.path[0]).color;

    if (getComputedStyle(el.path[0]).backgroundColor === "rgba(0, 0, 0, 0)") {
      removeTextBackground();
      document.getElementById(
        "dwuijb-tool-text-input-cover"
      ).style.background = document.getElementById(
        "dwuijb-tool-text-bg-color"
      ).value;

      //if text element has a color set
    } else {
      removeImageTool();
      removeImgTool();
      insertTextBackground();
      getTextBgColor(el);
      document.getElementById(
        "dwuijb-tool-text-input-cover"
      ).style.background = document.getElementById(
        "dwuijb-tool-text-bg-color"
      ).value;
    }

    //This converts the color you clicked on from rgb into hexidecimal so element colour clicked on is automatically loaded as color picker value

    let elementColor = getComputedStyle(el.path[0]).color;
    let removeChars = elementColor.replace("rgb(", "");
    let removeCharsTwo = removeChars.replace('"', "");
    let removeCharsThree = removeCharsTwo.replace(")", "");
    let removeCharsFour = removeCharsThree.replace(" ", "");
    let colorArray = removeCharsFour.split(",", [3]);

    function componentToHex(elementColor) {
      var hex = elementColor.toString(16);
      return hex.length == 1 ? "0" + hex : hex;
    }

    function rgbToHex(r, g, b) {
      return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    let hexColour = rgbToHex(
      parseInt(colorArray[0]),
      parseInt(colorArray[1]),
      parseInt(colorArray[2])
    );

    //set color
    document.getElementById("dwuijb-tool-input-color").value = hexColour;

    //get text value
    let getInnerText = el.path[0].innerText;
    document.getElementById("dwuijb-tool-input-text").value = getInnerText;

    //this sets the initial font size of the font input field

    let initialFontSize = getComputedStyle(el.path[0]).fontSize;
    let initFontSize = document.getElementById("dwuijb-font-size-field");
    let removePX = initialFontSize.split("px", [1]);
    initFontSize.value = `${removePX}`;

    // gets new x and y positions

    let xPositionElement = document.getElementById("dwuijb-element-slider-x");
    let newXPosition = document.getElementById("dwuijb-new-x-transform-value");

    xPositionElement.oninput = function() {
      newXPosition.textContent = this.value + "px";
    };

    let yPositionElement = document.getElementById("dwuijb-element-slider-y");
    let newYPosition = document.getElementById("dwuijb-new-y-transform-value");

    yPositionElement.oninput = function() {
      newYPosition.textContent = this.value + "px";
    };

    //get font underline

    let fontDecoration = getComputedStyle(el.path[0]).textDecoration;
    let decorationBtn = document.getElementById("dwuijb-underline-icon");

    //if udnerlined then make btn active

    if (fontDecoration.includes("underline")) {
      decorationBtn.classList.add("active-font-decoration");
    } else {
      decorationBtn.classList.remove("active-font-decoration");
    }

    //add event listener to remove and add active class to btn
    decorationBtn.addEventListener("click", () => {
      if (fontDecoration.includes("underline")) {
        decorationBtn.classList.remove("active-font-decoration");

        fontDecoration = fontDecoration.replace(
          "underline solid",
          "none solid"
        );
      } else {
        decorationBtn.classList.add("active-font-decoration");
        return (fontDecoration = fontDecoration.replace(
          "none solid",
          "underline solid"
        ));
      }
    });

    //get font italic

    let fontStyle = getComputedStyle(el.path[0]).fontStyle;
    let italicBtn = document.getElementById("dwuijb-italic-icon");

    //if italic then make btn active

    if (fontStyle.includes("italic")) {
      italicBtn.classList.add("active-font-decoration");
    } else {
      italicBtn.classList.remove("active-font-decoration");
    }

    //add event listener to remove and add active class to btn

    italicBtn.addEventListener("click", () => {
      italicBtn.classList.add("active-font-decoration");

      if (fontStyle.includes("italic")) {
        italicBtn.classList.remove("active-font-decoration");
        return (fontStyle = fontStyle.replace("italic", "normal"));
      } else {
        italicBtn.classList.add("active-font-decoration");
        return (fontStyle = fontStyle.replace("normal", "italic"));
      }
    });

    //get font weight

    let fontWeight = parseInt(getComputedStyle(el.path[0]).fontWeight);
    let boldBtn = document.getElementById("dwuijb-bold-icon");
    boldBtn.classList.remove("active-font-decoration");

    //sets bold botton active or not active when clicked

    if (fontWeight < 600) {
      boldBtn.classList.remove("active-font-decoration");
    } else {
      boldBtn.classList.add("active-font-decoration");
    }

    //adds 300 if font-weight < 600 and removes 300 font weight otherwise

    boldBtn.addEventListener("click", () => {
      if (fontWeight <= 600) {
        boldBtn.classList.add("active-font-decoration");
        return (fontWeight = fontWeight + 300);
      } else {
        boldBtn.classList.remove("active-font-decoration");
        return (fontWeight = fontWeight - 300);
      }
    });

    // gets the padding value

    let elPadding = getComputedStyle(el.path[0]).padding;

    //split the margin values

    let elPad = elPadding.split(" ");

    let splitPadString = [];

    //loops over the array and removes pixels

    for (let i = 0; i < elPad.length; i++) {
      splitPadString[i] = elPad[i].replace("px", "");
    }

    let topPadding = document.getElementById("dwuijb-padding-value-top");
    let rightPadding = document.getElementById("dwuijb-padding-value-right");
    let bottomPadding = document.getElementById("dwuijb-padding-value-bottom");
    let leftPadding = document.getElementById("dwuijb-padding-value-left");

    //if only one padding set for all four sides then the below runs

    if (splitPadString.length === 1) {
      topPadding.value = splitPadString[0];
      rightPadding.value = splitPadString[0];
      bottomPadding.value = splitPadString[0];
      leftPadding.value = splitPadString[0];

      //if two padding
    } else if (splitPadString.length === 2) {
      topPadding.value = splitPadString[0];
      rightPadding.value = splitPadString[1];
      bottomPadding.value = splitPadString[0];
      leftPadding.value = splitPadString[1];

      //three padding
    } else if (splitPadString.length === 3) {
      topPadding.value = splitPadString[0];
      rightPadding.value = splitPadString[1];
      bottomPadding.value = splitPadString[2];
      leftPadding.value = splitPadString[1];

      //four padding values different
    } else if (splitPadString.length === 4) {
      topPadding.value = splitPadString[0];
      rightPadding.value = splitPadString[1];
      bottomPadding.value = splitPadString[2];
      leftPadding.value = splitPadString[3];
    }

    // gets the margin value

    // gets the margin value

    let elMargin = getComputedStyle(el.path[0]).margin;

    //split the margin values

    let arrayMargin = elMargin.split(" ");

    let splitMarginString = [];

    //loops over the array and removes pixels

    for (let i = 0; i < arrayMargin.length; i++) {
      splitMarginString[i] = arrayMargin[i].replace("px", "");
    }

    let topMargin = document.getElementById("dwuijb-margin-value-top");
    let rightMargin = document.getElementById("dwuijb-margin-value-right");
    let bottomMargin = document.getElementById("dwuijb-margin-value-bottom");
    let leftMargin = document.getElementById("dwuijb-margin-value-left");

    //if only one margin set for all four sides then the below runs

    if (splitMarginString.length === 1) {
      topMargin.value = splitMarginString[0];
      rightMargin.value = splitMarginString[0];
      bottomMargin.value = splitMarginString[0];
      leftMargin.value = splitMarginString[0];

      //if two margin
    } else if (splitMarginString.length === 2) {
      topMargin.value = splitMarginString[0];
      rightMargin.value = splitMarginString[1];
      bottomMargin.value = splitMarginString[0];
      leftMargin.value = splitMarginString[1];

      //three margin
    } else if (splitMarginString.length === 3) {
      topMargin.value = splitMarginString[0];
      rightMargin.value = splitMarginString[1];
      bottomMargin.value = splitMarginString[2];
      leftMargin.value = splitMarginString[1];

      //four margin values different
    } else if (splitMarginString.length === 4) {
      topMargin.value = splitMarginString[0];
      rightMargin.value = splitMarginString[1];
      bottomMargin.value = splitMarginString[2];
      leftMargin.value = splitMarginString[3];
    }

    //on click of apply button get changes

    document
      .getElementById("dwuijb-button-apply")
      .addEventListener("click", () => {
        //  get text changes
        let elementText = document.getElementById("dwuijb-tool-input-text")
          .value;

        // get color change
        let colorChange = document.getElementById("dwuijb-tool-input-color")
          .value;

        //get font size

        let fontSize = document.getElementById("dwuijb-font-size-field").value;

        // get x and y positions
        let xPosition = document.getElementById("dwuijb-element-slider-x")
          .value;
        let yPosition = document.getElementById("dwuijb-element-slider-y")
          .value;

        //function to apply changes

        //run apply change function
        applyChange(
          elementText,
          colorChange,
          fontSize,
          xPosition,
          yPosition,
          fontWeight,
          fontDecoration
        );
      });

    applyChange = function(
      elementText,
      colorChange,
      fontSize,
      xPosition,
      yPosition,
      fontWeight,
      fontDecoration
    ) {
      // el.preventDefault();
      // el.stopImmediatePropagation();

      //gets values from tool to be applied

      el.target.innerText = `${elementText}`;
      el.target.style.color = colorChange;
      el.target.style.fontSize = `${fontSize}px`;
      el.target.style.transform = `translate(${xPosition}px, ${yPosition}px)`;
      el.target.style.fontWeight = fontWeight;
      el.target.style.textDecoration = `${fontDecoration}`;
      el.target.style.fontStyle = `${fontStyle}`;

      if (
        document
          .getElementById("dwuijb-text-background-container")
          .classList.contains("dwuijb-bg-color-applied")
      ) {
        let bgColor = document.getElementById("dwuijb-tool-text-bg-color")
          .value;
        el.target.style.background = bgColor;
        el.target.style.backgroundColor = bgColor;
      } else {
        //if bg removed then the inherit style is applied
        el.target.style.background = "inherit";
        el.target.style.backgroundColor = "inherit";
        el.target.style.backgroundImage = "";
      }

      //set padding

      el.target.style.padding = `${topPadding.value}px ${rightPadding.value}px ${bottomPadding.value}px ${leftPadding.value}px`;

      //set margin

      el.target.style.margin = `${topMargin.value}px ${rightMargin.value}px ${bottomMargin.value}px ${leftMargin.value}px`;

      //this adds a class to all elements which have had apply button pressed on them - this class is used to download code changes

      el.path[0].classList.add(`dwuijb-amended-element`);
    };
  }
};

//on click of font button initialises change font options

let insertFontWindow = () => {
  document.getElementById("dwuijb-play-container").classList.add("dwuijb-hide");
  document.getElementById("dwuijb-download-img").classList.add("dwuijb-hide");
  document.getElementById("dwuijb-download-code").classList.add("dwuijb-hide");
  document.getElementById("dwuijb-amend-font").classList.add("dwuijb-hide");
  document.getElementById("dwuijb-font-window").classList.remove("dwuijb-hide");

  //this sets the preview text 'Am i your type?' underneath the font dropdown with the selected font - it applies chosen value in dropdown as example

  let amendFont = () => {
    let chosenFont = document.getElementById("dwuijb-choose-font").value;
    document.getElementById(
      "dwuijb-regular-font"
    ).style.fontFamily = `${chosenFont}`;
    document.getElementById(
      "dwuijb-regular-font-itallic"
    ).style.fontFamily = `${chosenFont}`;
    document.getElementById(
      "dwuijb-bold-font"
    ).style.fontFamily = `${chosenFont}`;
    document.getElementById(
      "dwuijb-bold-font-itallic"
    ).style.fontFamily = `${chosenFont}`;
  };

  document
    .getElementById("dwuijb-choose-font")
    .addEventListener("change", amendFont);

  //Change font function

  let changeFont = () => {
    let chosenFont = document.getElementById("dwuijb-choose-font").value;
    let getAllFonts = document.querySelectorAll(
      "h1, h2, h3, h4, h5, h6, p, a, ul, li, button"
    );

    getAllFonts.forEach(function(el) {
      el.style.fontFamily = `${chosenFont}`;
    });
  };

  document
    .getElementById("dwuijb-submit-font")
    .addEventListener("click", changeFont);
};

// Exit font window

let endFont = () => {
  document
    .getElementById("dwuijb-play-container")
    .classList.remove("dwuijb-hide");
  document
    .getElementById("dwuijb-download-img")
    .classList.remove("dwuijb-hide");
  document
    .getElementById("dwuijb-download-code")
    .classList.remove("dwuijb-hide");
  document.getElementById("dwuijb-amend-font").classList.remove("dwuijb-hide");
  document.getElementById("dwuijb-font-window").classList.add("dwuijb-hide");

  //Anything in this array gets ignored by a font change

  let descendantArrayText = [];

  //push all text element children of tool window into descendantArrayText

  let descendantsText = Array.prototype.slice.call(
    document
      .getElementById("dwuijb-tool-window")
      .querySelectorAll("p, h1, h2, h3, h4, h5, a, li")
  );

  descendantsText.forEach(function(descendant) {
    descendantArrayText.push(descendant.id);
  });

  //remove empty strings from array
  descendantArrayText = descendantArrayText.filter(Boolean);

  //set initial font type for everything in the array
  descendantArrayText.forEach(function(element) {
    document.getElementById(element).style.fontFamily = `inherit`;
  });
};

{
  let docBody = document.querySelector("body");

  //insert HTML from html.js on page load

  (function insertPlay() {
    docBody.insertAdjacentHTML("beforeend", insertPlayIcon);
  })();

  (function insertTool() {
    docBody.insertAdjacentHTML("beforeend", insertToolWindow);
  })();

  (function insertAmendFont() {
    document.body.insertAdjacentHTML("beforeend", amendFont);
  })();

  (function insertImgChange() {
    docBody.insertAdjacentHTML("beforeend", imgChange);
  })();

  (function insertInfoWindow() {
    docBody.insertAdjacentHTML("beforeend", infoWindow);
  })();

  // downloads code changes - pulls from views.js

  document
    .getElementById("dwuijb-download-code")
    .addEventListener("click", downloadCode);

  //run the initialisation on click of play

  document
    .getElementById("dwuijb-play-container")
    .addEventListener("click", runInit);

  //insert font change window

  document
    .getElementById("dwuijb-amend-font")
    .addEventListener("click", insertFontWindow);

  //end font change window

  document
    .getElementById("dwuijb-exit-font-window")
    .addEventListener("click", endFont);

  // image search controls
  document.getElementById("dwuijb-search").addEventListener("keyup", e => {
    if (event.keyCode === 13) {
      e.preventDefault;
      controlSearch();
    }
  });

  document
    .getElementById("dwuijb-submit-search")
    .addEventListener("click", e => {
      e.preventDefault;
      controlSearch();
    });

  const infoIcon = document.getElementById("dwuijb-download-img");

  let insertInfoWindow = () => {
    document
      .getElementById("dwuijb-play-container")
      .classList.add("dwuijb-hide");
    document.getElementById("dwuijb-download-img").classList.add("dwuijb-hide");
    document
      .getElementById("dwuijb-download-code")
      .classList.add("dwuijb-hide");
    document.getElementById("dwuijb-amend-font").classList.add("dwuijb-hide");
    document
      .getElementById("dwuijb-info-window")
      .classList.remove("dwuijb-hide");
  };

  let removeInfoWindow = () => {
    document.getElementById("dwuijb-info-window").classList.add("dwuijb-hide");
  };

  infoIcon.addEventListener("click", () => {
    insertInfoWindow();
  });

  const closeInfo = document.getElementById("dwuijb-exit-cross-info");

  closeInfo.addEventListener("click", () => {
    removeInfoWindow();
    showPlay();
  });
}
