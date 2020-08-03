//Dichiaro le variabili
let tutteLeNotizie, cronacaNera, sport, notizieDallEstero, gossip;
let divArticoloSport;

//Array con oggetti articoli
cronacaNera = [
    {
        titolo: "Titolo 1 cronaca nera",
        corpo: `<p>Lorem 1 cronaca nera ipsum dolor sit amet, consectetur adipiscing elit. Donec vel venenatis est. Orci varius natoque penatibus et magnis dis parturient montes, 
        nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec non mauris et ex ultricies tristique quis in ligula. 
        Integer hendrerit fermentum felis at vehicula. Integer lacinia ante quis tellus bibendum posuere. Pellentesque placerat mauris et feugiat gravida.</p>
        <p>Mauris in pulvinar ligula. Quisque lectus eros, commodo a tortor id, vestibulum varius lacus. Nunc vel bibendum mi, eu vehicula lectus. Sed eu augue sit amet ante placerat
        tristique. Donec lobortis elit neque, vitae consequat justo blandit a. Ut consectetur laoreet ultrices. Proin gravida luctus est, nec tincidunt turpis viverra a. 
        Nunc sed lacinia purus, sit amet tempus metus. Quisque egestas efficitur nibh sit amet fermentum. In sed nulla vitae urna laoreet facilisis. Nullam urna arcu, aliquet sit
        amet venenatis non, vulputate in urna. Donec feugiat felis massa, commodo dictum neque placerat vehicula.</p>
        <p>Quisque sit amet turpis in leo cursus iaculis et efficitur nisi. Aliquam in euismod lacus. Proin ac dolor id ex vestibulum ullamcorper. Pellentesque vitae mattis dui. 
        Duis facilisis aliquam varius. Duis in lacus sit amet urna tristique vestibulum ac ut felis. Praesent massa metus, tincidunt non velit at, lobortis consequat tortor. 
        Integer est metus, malesuada non nisi eget, mattis bibendum leo. Duis quam purus, gravida a ex a, feugiat vehicula neque. Sed molestie semper est, quis porta ex efficitur
        sit amet. Donec finibus lacinia tortor id pharetra. Nullam aliquam ac sapien vel bibendum. Morbi vestibulum vel enim a volutpat. Proin mattis sollicitudin arcu, quis s</p>`,
        categoria: "Cronaca nera",
        classeCss: "cronaca-nera"
    },
    {
        titolo: "Titolo 2 cronaca nera",
        corpo: `<p>Lorem 2 cronaca nera ipsum dolor sit amet, consectetur adipiscing elit. Donec vel venenatis est. Orci varius natoque penatibus et magnis dis parturient montes, 
        nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec non mauris et ex ultricies tristique quis in ligula. 
        Integer hendrerit fermentum felis at vehicula. Integer lacinia ante quis tellus bibendum posuere. Pellentesque placerat mauris et feugiat gravida.</p>
        <p>Mauris in pulvinar ligula. Quisque lectus eros, commodo a tortor id, vestibulum varius lacus. Nunc vel bibendum mi, eu vehicula lectus. Sed eu augue sit amet ante placerat
        tristique. Donec lobortis elit neque, vitae consequat justo blandit a. Ut consectetur laoreet ultrices. Proin gravida luctus est, nec tincidunt turpis viverra a. 
        Nunc sed lacinia purus, sit amet tempus metus. Quisque egestas efficitur nibh sit amet fermentum. In sed nulla vitae urna laoreet facilisis. Nullam urna arcu, aliquet sit
        amet venenatis non, vulputate in urna. Donec feugiat felis massa, commodo dictum neque placerat vehicula.</p>
        <p>Quisque sit amet turpis in leo cursus iaculis et efficitur nisi. Aliquam in euismod lacus. Proin ac dolor id ex vestibulum ullamcorper. Pellentesque vitae mattis dui. 
        Duis facilisis aliquam varius. Duis in lacus sit amet urna tristique vestibulum ac ut felis. Praesent massa metus, tincidunt non velit at, lobortis consequat tortor. 
        Integer est metus, malesuada non nisi eget, mattis bibendum leo. Duis quam purus, gravida a ex a, feugiat vehicula neque. Sed molestie semper est, quis porta ex efficitur
        sit amet. Donec finibus lacinia tortor id pharetra. Nullam aliquam ac sapien vel bibendum. Morbi vestibulum vel enim a volutpat. Proin mattis sollicitudin arcu, quis s</p>`,
        categoria: "Cronaca nera",
        classeCss: "cronaca-nera"
    },
    {
        titolo: "Titolo 3 cronaca nera",
        corpo: `<p>Lorem 3 cronaca nera ipsum dolor sit amet, consectetur adipiscing elit. Donec vel venenatis est. Orci varius natoque penatibus et magnis dis parturient montes, 
        nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec non mauris et ex ultricies tristique quis in ligula. 
        Integer hendrerit fermentum felis at vehicula. Integer lacinia ante quis tellus bibendum posuere. Pellentesque placerat mauris et feugiat gravida.</p>
        <p>Mauris in pulvinar ligula. Quisque lectus eros, commodo a tortor id, vestibulum varius lacus. Nunc vel bibendum mi, eu vehicula lectus. Sed eu augue sit amet ante placerat
        tristique. Donec lobortis elit neque, vitae consequat justo blandit a. Ut consectetur laoreet ultrices. Proin gravida luctus est, nec tincidunt turpis viverra a. 
        Nunc sed lacinia purus, sit amet tempus metus. Quisque egestas efficitur nibh sit amet fermentum. In sed nulla vitae urna laoreet facilisis. Nullam urna arcu, aliquet sit
        amet venenatis non, vulputate in urna. Donec feugiat felis massa, commodo dictum neque placerat vehicula.</p>
        <p>Quisque sit amet turpis in leo cursus iaculis et efficitur nisi. Aliquam in euismod lacus. Proin ac dolor id ex vestibulum ullamcorper. Pellentesque vitae mattis dui. 
        Duis facilisis aliquam varius. Duis in lacus sit amet urna tristique vestibulum ac ut felis. Praesent massa metus, tincidunt non velit at, lobortis consequat tortor. 
        Integer est metus, malesuada non nisi eget, mattis bibendum leo. Duis quam purus, gravida a ex a, feugiat vehicula neque. Sed molestie semper est, quis porta ex efficitur
        sit amet. Donec finibus lacinia tortor id pharetra. Nullam aliquam ac sapien vel bibendum. Morbi vestibulum vel enim a volutpat. Proin mattis sollicitudin arcu, quis s</p>`,
        categoria: "Cronaca nera",
        classeCss: "cronaca-nera"
    }
];

sport = [
    {
        titolo: "Titolo 1 sport",
        corpo: `<p>Lorem 1 sport ipsum dolor sit amet, consectetur adipiscing elit. Donec vel venenatis est. Orci varius natoque penatibus et magnis dis parturient montes, 
        nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec non mauris et ex ultricies tristique quis in ligula. 
        Integer hendrerit fermentum felis at vehicula. Integer lacinia ante quis tellus bibendum posuere. Pellentesque placerat mauris et feugiat gravida.</p>
        <p>Mauris in pulvinar ligula. Quisque lectus eros, commodo a tortor id, vestibulum varius lacus. Nunc vel bibendum mi, eu vehicula lectus. Sed eu augue sit amet ante placerat
        tristique. Donec lobortis elit neque, vitae consequat justo blandit a. Ut consectetur laoreet ultrices. Proin gravida luctus est, nec tincidunt turpis viverra a. 
        Nunc sed lacinia purus, sit amet tempus metus. Quisque egestas efficitur nibh sit amet fermentum. In sed nulla vitae urna laoreet facilisis. Nullam urna arcu, aliquet sit
        amet venenatis non, vulputate in urna. Donec feugiat felis massa, commodo dictum neque placerat vehicula.</p>
        <p>Quisque sit amet turpis in leo cursus iaculis et efficitur nisi. Aliquam in euismod lacus. Proin ac dolor id ex vestibulum ullamcorper. Pellentesque vitae mattis dui. 
        Duis facilisis aliquam varius. Duis in lacus sit amet urna tristique vestibulum ac ut felis. Praesent massa metus, tincidunt non velit at, lobortis consequat tortor. 
        Integer est metus, malesuada non nisi eget, mattis bibendum leo. Duis quam purus, gravida a ex a, feugiat vehicula neque. Sed molestie semper est, quis porta ex efficitur
        sit amet. Donec finibus lacinia tortor id pharetra. Nullam aliquam ac sapien vel bibendum. Morbi vestibulum vel enim a volutpat. Proin mattis sollicitudin arcu, quis s</p>`,
        categoria: "Sport",
        classeCss: "sport"
    },
    {
        titolo: "Titolo 2 sport",
        corpo: `<p>Lorem 2 sport ipsum dolor sit amet, consectetur adipiscing elit. Donec vel venenatis est. Orci varius natoque penatibus et magnis dis parturient montes, 
        nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec non mauris et ex ultricies tristique quis in ligula. 
        Integer hendrerit fermentum felis at vehicula. Integer lacinia ante quis tellus bibendum posuere. Pellentesque placerat mauris et feugiat gravida.</p>
        <p>Mauris in pulvinar ligula. Quisque lectus eros, commodo a tortor id, vestibulum varius lacus. Nunc vel bibendum mi, eu vehicula lectus. Sed eu augue sit amet ante placerat
        tristique. Donec lobortis elit neque, vitae consequat justo blandit a. Ut consectetur laoreet ultrices. Proin gravida luctus est, nec tincidunt turpis viverra a. 
        Nunc sed lacinia purus, sit amet tempus metus. Quisque egestas efficitur nibh sit amet fermentum. In sed nulla vitae urna laoreet facilisis. Nullam urna arcu, aliquet sit
        amet venenatis non, vulputate in urna. Donec feugiat felis massa, commodo dictum neque placerat vehicula.</p>
        <p>Quisque sit amet turpis in leo cursus iaculis et efficitur nisi. Aliquam in euismod lacus. Proin ac dolor id ex vestibulum ullamcorper. Pellentesque vitae mattis dui. 
        Duis facilisis aliquam varius. Duis in lacus sit amet urna tristique vestibulum ac ut felis. Praesent massa metus, tincidunt non velit at, lobortis consequat tortor. 
        Integer est metus, malesuada non nisi eget, mattis bibendum leo. Duis quam purus, gravida a ex a, feugiat vehicula neque. Sed molestie semper est, quis porta ex efficitur
        sit amet. Donec finibus lacinia tortor id pharetra. Nullam aliquam ac sapien vel bibendum. Morbi vestibulum vel enim a volutpat. Proin mattis sollicitudin arcu, quis s</p>`,
        categoria: "Sport",
        classeCss: "sport"
    },
    {
        titolo: "Titolo 3 sport",
        corpo: `<p>Lorem 3 sport ipsum dolor sit amet, consectetur adipiscing elit. Donec vel venenatis est. Orci varius natoque penatibus et magnis dis parturient montes, 
        nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec non mauris et ex ultricies tristique quis in ligula. 
        Integer hendrerit fermentum felis at vehicula. Integer lacinia ante quis tellus bibendum posuere. Pellentesque placerat mauris et feugiat gravida.</p>
        <p>Mauris in pulvinar ligula. Quisque lectus eros, commodo a tortor id, vestibulum varius lacus. Nunc vel bibendum mi, eu vehicula lectus. Sed eu augue sit amet ante placerat
        tristique. Donec lobortis elit neque, vitae consequat justo blandit a. Ut consectetur laoreet ultrices. Proin gravida luctus est, nec tincidunt turpis viverra a. 
        Nunc sed lacinia purus, sit amet tempus metus. Quisque egestas efficitur nibh sit amet fermentum. In sed nulla vitae urna laoreet facilisis. Nullam urna arcu, aliquet sit
        amet venenatis non, vulputate in urna. Donec feugiat felis massa, commodo dictum neque placerat vehicula.</p>
        <p>Quisque sit amet turpis in leo cursus iaculis et efficitur nisi. Aliquam in euismod lacus. Proin ac dolor id ex vestibulum ullamcorper. Pellentesque vitae mattis dui. 
        Duis facilisis aliquam varius. Duis in lacus sit amet urna tristique vestibulum ac ut felis. Praesent massa metus, tincidunt non velit at, lobortis consequat tortor. 
        Integer est metus, malesuada non nisi eget, mattis bibendum leo. Duis quam purus, gravida a ex a, feugiat vehicula neque. Sed molestie semper est, quis porta ex efficitur
        sit amet. Donec finibus lacinia tortor id pharetra. Nullam aliquam ac sapien vel bibendum. Morbi vestibulum vel enim a volutpat. Proin mattis sollicitudin arcu, quis s</p>`,
        categoria: "Sport",
        classeCss: "sport"
    }
];

notizieDallEstero = [
    {
        titolo: "Titolo 1 notizie dall'estero",
        corpo: `<p>Lorem 1 notizie dall'estero ipsum dolor sit amet, consectetur adipiscing elit. Donec vel venenatis est. Orci varius natoque penatibus et magnis dis parturient montes, 
        nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec non mauris et ex ultricies tristique quis in ligula. 
        Integer hendrerit fermentum felis at vehicula. Integer lacinia ante quis tellus bibendum posuere. Pellentesque placerat mauris et feugiat gravida.</p>
        <p>Mauris in pulvinar ligula. Quisque lectus eros, commodo a tortor id, vestibulum varius lacus. Nunc vel bibendum mi, eu vehicula lectus. Sed eu augue sit amet ante placerat
        tristique. Donec lobortis elit neque, vitae consequat justo blandit a. Ut consectetur laoreet ultrices. Proin gravida luctus est, nec tincidunt turpis viverra a. 
        Nunc sed lacinia purus, sit amet tempus metus. Quisque egestas efficitur nibh sit amet fermentum. In sed nulla vitae urna laoreet facilisis. Nullam urna arcu, aliquet sit
        amet venenatis non, vulputate in urna. Donec feugiat felis massa, commodo dictum neque placerat vehicula.</p>
        <p>Quisque sit amet turpis in leo cursus iaculis et efficitur nisi. Aliquam in euismod lacus. Proin ac dolor id ex vestibulum ullamcorper. Pellentesque vitae mattis dui. 
        Duis facilisis aliquam varius. Duis in lacus sit amet urna tristique vestibulum ac ut felis. Praesent massa metus, tincidunt non velit at, lobortis consequat tortor. 
        Integer est metus, malesuada non nisi eget, mattis bibendum leo. Duis quam purus, gravida a ex a, feugiat vehicula neque. Sed molestie semper est, quis porta ex efficitur
        sit amet. Donec finibus lacinia tortor id pharetra. Nullam aliquam ac sapien vel bibendum. Morbi vestibulum vel enim a volutpat. Proin mattis sollicitudin arcu, quis s</p>`,
        categoria: "Notizie dall'estero",
        classeCss: "notizie-estero"
    },
    {
        titolo: "Titolo 2 notizie dall'estero",
        corpo: `<p>Lorem 2 notizie dall'estero ipsum dolor sit amet, consectetur adipiscing elit. Donec vel venenatis est. Orci varius natoque penatibus et magnis dis parturient montes, 
        nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec non mauris et ex ultricies tristique quis in ligula. 
        Integer hendrerit fermentum felis at vehicula. Integer lacinia ante quis tellus bibendum posuere. Pellentesque placerat mauris et feugiat gravida.</p>
        <p>Mauris in pulvinar ligula. Quisque lectus eros, commodo a tortor id, vestibulum varius lacus. Nunc vel bibendum mi, eu vehicula lectus. Sed eu augue sit amet ante placerat
        tristique. Donec lobortis elit neque, vitae consequat justo blandit a. Ut consectetur laoreet ultrices. Proin gravida luctus est, nec tincidunt turpis viverra a. 
        Nunc sed lacinia purus, sit amet tempus metus. Quisque egestas efficitur nibh sit amet fermentum. In sed nulla vitae urna laoreet facilisis. Nullam urna arcu, aliquet sit
        amet venenatis non, vulputate in urna. Donec feugiat felis massa, commodo dictum neque placerat vehicula.</p>
        <p>Quisque sit amet turpis in leo cursus iaculis et efficitur nisi. Aliquam in euismod lacus. Proin ac dolor id ex vestibulum ullamcorper. Pellentesque vitae mattis dui. 
        Duis facilisis aliquam varius. Duis in lacus sit amet urna tristique vestibulum ac ut felis. Praesent massa metus, tincidunt non velit at, lobortis consequat tortor. 
        Integer est metus, malesuada non nisi eget, mattis bibendum leo. Duis quam purus, gravida a ex a, feugiat vehicula neque. Sed molestie semper est, quis porta ex efficitur
        sit amet. Donec finibus lacinia tortor id pharetra. Nullam aliquam ac sapien vel bibendum. Morbi vestibulum vel enim a volutpat. Proin mattis sollicitudin arcu, quis s</p>`,
        categoria: "Notizie dall'estero",
        classeCss: "notizie-estero"
    },
    {
        titolo: "Titolo 3 notizie dall'estero",
        corpo: `<p>Lorem 3 notizie dall'estero ipsum dolor sit amet, consectetur adipiscing elit. Donec vel venenatis est. Orci varius natoque penatibus et magnis dis parturient montes, 
        nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec non mauris et ex ultricies tristique quis in ligula. 
        Integer hendrerit fermentum felis at vehicula. Integer lacinia ante quis tellus bibendum posuere. Pellentesque placerat mauris et feugiat gravida.</p>
        <p>Mauris in pulvinar ligula. Quisque lectus eros, commodo a tortor id, vestibulum varius lacus. Nunc vel bibendum mi, eu vehicula lectus. Sed eu augue sit amet ante placerat
        tristique. Donec lobortis elit neque, vitae consequat justo blandit a. Ut consectetur laoreet ultrices. Proin gravida luctus est, nec tincidunt turpis viverra a. 
        Nunc sed lacinia purus, sit amet tempus metus. Quisque egestas efficitur nibh sit amet fermentum. In sed nulla vitae urna laoreet facilisis. Nullam urna arcu, aliquet sit
        amet venenatis non, vulputate in urna. Donec feugiat felis massa, commodo dictum neque placerat vehicula.</p>
        <p>Quisque sit amet turpis in leo cursus iaculis et efficitur nisi. Aliquam in euismod lacus. Proin ac dolor id ex vestibulum ullamcorper. Pellentesque vitae mattis dui. 
        Duis facilisis aliquam varius. Duis in lacus sit amet urna tristique vestibulum ac ut felis. Praesent massa metus, tincidunt non velit at, lobortis consequat tortor. 
        Integer est metus, malesuada non nisi eget, mattis bibendum leo. Duis quam purus, gravida a ex a, feugiat vehicula neque. Sed molestie semper est, quis porta ex efficitur
        sit amet. Donec finibus lacinia tortor id pharetra. Nullam aliquam ac sapien vel bibendum. Morbi vestibulum vel enim a volutpat. Proin mattis sollicitudin arcu, quis s</p>`,
        categoria: "Notizie dall'estero",
        classeCss: "notizie-estero"
    }
];

gossip = [
    {
        titolo: "Titolo 1 notizie gossip",
        corpo: `<p>Lorem 1 gossip ipsum dolor sit amet, consectetur adipiscing elit. Donec vel venenatis est. Orci varius natoque penatibus et magnis dis parturient montes, 
        nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec non mauris et ex ultricies tristique quis in ligula. 
        Integer hendrerit fermentum felis at vehicula. Integer lacinia ante quis tellus bibendum posuere. Pellentesque placerat mauris et feugiat gravida.</p>
        <p>Mauris in pulvinar ligula. Quisque lectus eros, commodo a tortor id, vestibulum varius lacus. Nunc vel bibendum mi, eu vehicula lectus. Sed eu augue sit amet ante placerat
        tristique. Donec lobortis elit neque, vitae consequat justo blandit a. Ut consectetur laoreet ultrices. Proin gravida luctus est, nec tincidunt turpis viverra a. 
        Nunc sed lacinia purus, sit amet tempus metus. Quisque egestas efficitur nibh sit amet fermentum. In sed nulla vitae urna laoreet facilisis. Nullam urna arcu, aliquet sit
        amet venenatis non, vulputate in urna. Donec feugiat felis massa, commodo dictum neque placerat vehicula.</p>
        <p>Quisque sit amet turpis in leo cursus iaculis et efficitur nisi. Aliquam in euismod lacus. Proin ac dolor id ex vestibulum ullamcorper. Pellentesque vitae mattis dui. 
        Duis facilisis aliquam varius. Duis in lacus sit amet urna tristique vestibulum ac ut felis. Praesent massa metus, tincidunt non velit at, lobortis consequat tortor. 
        Integer est metus, malesuada non nisi eget, mattis bibendum leo. Duis quam purus, gravida a ex a, feugiat vehicula neque. Sed molestie semper est, quis porta ex efficitur
        sit amet. Donec finibus lacinia tortor id pharetra. Nullam aliquam ac sapien vel bibendum. Morbi vestibulum vel enim a volutpat. Proin mattis sollicitudin arcu, quis s</p>`,
        categoria: "Gossip",
        classeCss: "gossip"
    },
    {
        titolo: "Titolo 2 notizie gossip",
        corpo: `<p>Lorem 2 gossip ipsum dolor sit amet, consectetur adipiscing elit. Donec vel venenatis est. Orci varius natoque penatibus et magnis dis parturient montes, 
        nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec non mauris et ex ultricies tristique quis in ligula. 
        Integer hendrerit fermentum felis at vehicula. Integer lacinia ante quis tellus bibendum posuere. Pellentesque placerat mauris et feugiat gravida.</p>
        <p>Mauris in pulvinar ligula. Quisque lectus eros, commodo a tortor id, vestibulum varius lacus. Nunc vel bibendum mi, eu vehicula lectus. Sed eu augue sit amet ante placerat
        tristique. Donec lobortis elit neque, vitae consequat justo blandit a. Ut consectetur laoreet ultrices. Proin gravida luctus est, nec tincidunt turpis viverra a. 
        Nunc sed lacinia purus, sit amet tempus metus. Quisque egestas efficitur nibh sit amet fermentum. In sed nulla vitae urna laoreet facilisis. Nullam urna arcu, aliquet sit
        amet venenatis non, vulputate in urna. Donec feugiat felis massa, commodo dictum neque placerat vehicula.</p>
        <p>Quisque sit amet turpis in leo cursus iaculis et efficitur nisi. Aliquam in euismod lacus. Proin ac dolor id ex vestibulum ullamcorper. Pellentesque vitae mattis dui. 
        Duis facilisis aliquam varius. Duis in lacus sit amet urna tristique vestibulum ac ut felis. Praesent massa metus, tincidunt non velit at, lobortis consequat tortor. 
        Integer est metus, malesuada non nisi eget, mattis bibendum leo. Duis quam purus, gravida a ex a, feugiat vehicula neque. Sed molestie semper est, quis porta ex efficitur
        sit amet. Donec finibus lacinia tortor id pharetra. Nullam aliquam ac sapien vel bibendum. Morbi vestibulum vel enim a volutpat. Proin mattis sollicitudin arcu, quis s</p>`,
        categoria: "Gossip",
        classeCss: "gossip"
    },
    {
        titolo: "Titolo 3 notizie gossip",
        corpo: `<p>Lorem 3 gossip ipsum dolor sit amet, consectetur adipiscing elit. Donec vel venenatis est. Orci varius natoque penatibus et magnis dis parturient montes, 
        nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec non mauris et ex ultricies tristique quis in ligula. 
        Integer hendrerit fermentum felis at vehicula. Integer lacinia ante quis tellus bibendum posuere. Pellentesque placerat mauris et feugiat gravida.</p>
        <p>Mauris in pulvinar ligula. Quisque lectus eros, commodo a tortor id, vestibulum varius lacus. Nunc vel bibendum mi, eu vehicula lectus. Sed eu augue sit amet ante placerat
        tristique. Donec lobortis elit neque, vitae consequat justo blandit a. Ut consectetur laoreet ultrices. Proin gravida luctus est, nec tincidunt turpis viverra a. 
        Nunc sed lacinia purus, sit amet tempus metus. Quisque egestas efficitur nibh sit amet fermentum. In sed nulla vitae urna laoreet facilisis. Nullam urna arcu, aliquet sit
        amet venenatis non, vulputate in urna. Donec feugiat felis massa, commodo dictum neque placerat vehicula.</p>
        <p>Quisque sit amet turpis in leo cursus iaculis et efficitur nisi. Aliquam in euismod lacus. Proin ac dolor id ex vestibulum ullamcorper. Pellentesque vitae mattis dui. 
        Duis facilisis aliquam varius. Duis in lacus sit amet urna tristique vestibulum ac ut felis. Praesent massa metus, tincidunt non velit at, lobortis consequat tortor. 
        Integer est metus, malesuada non nisi eget, mattis bibendum leo. Duis quam purus, gravida a ex a, feugiat vehicula neque. Sed molestie semper est, quis porta ex efficitur
        sit amet. Donec finibus lacinia tortor id pharetra. Nullam aliquam ac sapien vel bibendum. Morbi vestibulum vel enim a volutpat. Proin mattis sollicitudin arcu, quis s</p>`,
        categoria: "Gossip",
        classeCss: "gossip"
    }
];

//Array che contiene tutte gli altri array, quindi tutti gli object articoli
tutteLeNotizie = [cronacaNera, sport, notizieDallEstero, gossip];

//Funzione per filtrare le notizie per categorie e/o mostrarle tutte
function showNotizie(arrName) {//cicli di array in altro array
    document.getElementsByClassName('articoli')[0].innerHTML = "";
    if (arrName === tutteLeNotizie) {
        for (let arrArticoli of arrName) {
            /* Il ciclo for classico mi permette di costruire un div contenitore con la relativa classe giusta per ogni oggetto, 
            richiamando la proprietà classeCss */
            for (let i = 0; i < arrArticoli.length; i++) {
                let objArticolo = arrArticoli[i];
                document.getElementsByClassName('articoli')[0].innerHTML += `<div class="${objArticolo.classeCss}"></div>`
                for (prop in objArticolo) {
                    if (prop == 'titolo') {
                        document.getElementsByClassName(`${objArticolo.classeCss}`)[i].innerHTML += `<h2>${objArticolo[prop]}</h2>`;
                    } else if (prop == 'corpo') {
                        document.getElementsByClassName(`${objArticolo.classeCss}`)[i].innerHTML += `${objArticolo[prop]}`;
                    } else if (prop == 'categoria') {
                        document.getElementsByClassName(`${objArticolo.classeCss}`)[i].innerHTML += `<em>${objArticolo[prop]}</em>`;
                    }
                }
            }
        }
    } else {
        document.getElementsByClassName('articoli')[0].innerHTML = "";
        for (let i = 0; i < arrName.length; i++) { //stesso ragionamento del commento di sopra
            let objArticolo = arrName[i];
            document.getElementsByClassName('articoli')[0].innerHTML += `<div class="${objArticolo.classeCss}"></div>`
            for (let prop in objArticolo) {
                if (prop == 'titolo') {
                    document.getElementsByClassName(`${objArticolo.classeCss}`)[i].innerHTML += `<h2>${objArticolo[prop]}</h2>`;
                } else if (prop == 'corpo') {
                    document.getElementsByClassName(`${objArticolo.classeCss}`)[i].innerHTML += `${objArticolo[prop]}`;
                } else if (prop == 'categoria') {
                    document.getElementsByClassName(`${objArticolo.classeCss}`)[i].innerHTML += `<em>${objArticolo[prop]}</em>`;
                }
            }
        }
    };
};

//Richiamo funzione con parametro array tutteLeNotizie
showNotizie(tutteLeNotizie);

//Animazione con temporizzatore per articoli sezione Sport
divArticoloSport = document.body.querySelectorAll('.articoli div.sport');