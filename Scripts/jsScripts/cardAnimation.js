var coll = document.getElementsByClassName("collapsible");
        var i;

        for (i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var content = this.nextElementSibling;
                if (content.style.maxWidth) {
                    content.style.maxWidth = null;
                } else {
                    content.style.maxWidth = content.scrollWidth + "px";
                }
            });
        }