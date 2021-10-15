var StyleController ={
    setAnchorStyle:function (color){
        $('a').css('color', color);
    },
    setBodyStyle:function (bgColor, color){
        $('body').css('backgroundColor', bgColor);
        $('body').css('color', color);
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