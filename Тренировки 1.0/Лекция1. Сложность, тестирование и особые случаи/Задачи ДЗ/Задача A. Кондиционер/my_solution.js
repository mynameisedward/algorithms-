let algo = (troom, tcond, mode) => {
    if(mode == 'freeze') {
        if(troom > tcond) {
            console.log(tcond)
            return tcond
        } else if(troom <= tcond) {
            console.log(troom);
            return troom
        }
    } else if(mode == 'heat') {
        if(troom < tcond) {
            console.log(tcond)
            return tcond
        } else if(troom >= tcond) {
            return troom
        }
    } else if(mode == 'auto') {
        console.log(tcond)
        return tcond
    } else if(mode == 'fan') {
        console.log(troom)
        return troom
    
    }
}

algo(troom, tcond, mode)