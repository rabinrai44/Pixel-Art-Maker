/* Define variables  
selecting the DOM elements that the user will interact with.
*/

const pixelCanvas = $('#pixelCanvas');

// Creates grid upon clicking 'submit' button - event method
$('#sizePicker').submit(function makeGrid(e) {
    e.preventDefault();
    

    // if grid is already present, clear any cells that have filled in
    $('table tr').remove();
    

    // grid height value entered by user
    const heightInput = $('#inputHeight').val();
    

    // grid width value entered by user 
    const widthInput = $('#inputWidth').val();

    // Outer for loop adds desired number of rows 
    for (let i = 1; i <= heightInput; i++) {

        $('table').append('<tr></tr>');

        for (let j = 1; j <= widthInput; j++) {
            $('tr').filter(':last').append('<td></td>');
            $('td').attr('class', 'Cell');
        }
    }

    $('.Cell').mousedown(function() {
        /* add chosen color to cell opon a click event. 
        'this' refers to cell being clicked.
         Variable 'color' is defiend here rather than globally so JS checks whether 
         a new color has been picked before each mousedown event  */

        let color = $('#colorPicker').val();
        $(this).css('background-color', color);
    });
    dragColor();    
});

/* Enables mouse-drag coloring. 
Fills in cell when mouse pointer enter it and mouse is pressed down */
 function dragColor() {
    pixelCanvas.on('mousedown', 'td', function() {
        mousedown = true;
    });

    // 'mouseup': when pointer is over element and mouse button has been clicked then released
    $(document).mouseup(function () {
        mousedown = false;
    });

    // mouseover triggered when mouse pointer enters an element 
    pixelCanvas.on('mouseover', 'td', function() {
        let color = $('#colorPicker').val();
        if (mousedown) {
            $(this).css('background-color', color);
        }
    });
}