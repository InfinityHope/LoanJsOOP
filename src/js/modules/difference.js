export default class Difference {
    constructor(oldOfficer, newOfficer, items) {
        try {
            this.oldOfficer = document.querySelector(oldOfficer);
            this.newOfficer = document.querySelector(newOfficer);
            this.items = items;
            this.oldItems = this.oldOfficer.querySelectorAll(items);
            this.newItems = this.newOfficer.querySelectorAll(items);
            this.oldCounter = 0;
            this.newCounter = 0;
        } catch(e) {}
    }
    
    hideItems(items) {
        items.forEach((item, i, arr) => {
            if (i !== arr.length - 1) {
                item.style.display = 'none';
            }
        });
    }

    bindListener(trigger, animation, items, counter) {
        trigger.querySelector('.plus').addEventListener('click', ()=> {
            items[counter].style.display = 'flex';
            if (counter !== items.length - 2) {
                items[counter].classList.add('animated', `${animation}`);
                counter++;
            } else {
                items[counter].style.display = 'flex';
                items[counter].classList.add('animated', `${animation}`);
                items[items.length - 1].remove();
            }
        })
    }

    init() {
        try {
            this.hideItems(this.oldItems);
            this.hideItems(this.newItems);
            this.bindListener(this.oldOfficer, 'slideInLeft', this.oldItems, this.oldCounter);
            this.bindListener(this.newOfficer, 'slideInRight', this.newItems, this.newCounter);
        } catch(e) {}
    }
}