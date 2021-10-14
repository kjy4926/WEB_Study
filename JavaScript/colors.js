var StyleController ={
    setAnchorStyle:function (color){
        var anchors = document.querySelectorAll('a');
        var i = 0;
        while(i < anchors.length){
            anchors[i].style.color = color;
            i += 1;
        }
    },
    setBodyStyle:function (bgColor, color){
        var target = document.querySelector('body');
        target.style.backgroundColor = bgColor;
        target.style.color = color;
    },
    bodyStyleHandler:function (self){
        var target = document.querySelector('body');
        if(self.value =='night'){
            this.setBodyStyle('black', 'white')
            this.setAnchorStyle('yellow')
            self.value = 'dawn';
        }
        else if(self.value =='dawn'){
            this.setBodyStyle('gray', 'orange')
            this.setAnchorStyle('lightblue')
            self.value = 'day';
        }
        else{
            this.setBodyStyle('white', 'black')
            this.setAnchorStyle('blue')
            self.value = 'night';
        }
    }
}