 function updateText() {
            let inputText = document.getElementById("area").value;
            document.getElementById("output").innerText = inputText;
        }


        let ele = document.getElementById("output");
        function textBold() {
            if (ele.style.fontWeight == "bold") {
                ele.style.fontWeight = "100";
            }
            else {
                ele.style.fontWeight = "bold";
            }
        }


        let ele2 = document.getElementById("output");
        function textItalic() {
            if (ele.style.fontStyle == "italic") {
                ele.style.fontStyle = "normal";
            }
            else {
                ele.style.fontStyle = "italic";
            }
        }

        let ele3 = document.getElementById("output");
        function textUppercase() {
            if (ele3.innerText == ele3.innerText.toUpperCase()) {
                // ele3.innerText = ele3.innerText.toLowerCase();
            }
            else (ele3.innerText = ele3.innerText.toUpperCase())
        }

        let ele4 = document.getElementById("output");
        function textLowercase() {
            if (ele4.innerText == ele4.innerText.toLowerCase()) {
                // ele4.innerText = ele4.innerText.toUpperCase();
            }
            else (ele4.innerText = ele4.innerText.toLowerCase())
        }

        let ele5 = document.getElementById("output");
        function Change_Text_Color() {
            let cvalue = document.getElementById("color-input").value;
            if (ele5.style.color == "black") {
                ele5.style.color = cvalue;
            }
            else {
                ele5.style.color = "black";
            }
        }

        let ele6 = document.getElementById("output");
        function Uppercase_Each_First_Letter() {
            if (ele6.style.textTransform == "capitalize") {
                ele6.style.textTransform = "unset";
            }
            else {
                ele6.style.textTransform = "capitalize";
            }
        }