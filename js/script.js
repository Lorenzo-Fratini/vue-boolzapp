function init() {
  
  new Vue({

    el: '#app',

    data: {

      searchUsers: '',

      activeUser: {},

      message: '',

      displayClass: '',

      contacts: [
        {
          name: 'Marco',
          avatar: 'male1.png',
          lastEntry: 'Ultimo accesso oggi alle 06:50',
          visible: true,
          messages: [
            {
              optionsDisplay: '',
              date: '10/01/2020',
              hour: '15:30',
              text: 'Hai portato a spasso il cane?',
              status: 'sent'
            },
            {
              optionsDisplay: '',
              date: '10/01/2020',
              hour: '15:50',
              text: 'Ricordati di dargli da mangiare',
              status: 'sent'
            },
            {
              optionsDisplay: '',
              date: '10/01/2020',
              hour: '16:15',
              text: 'Tutto fatto!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Fabio',
          avatar: 'male2.jpg',
          lastEntry: 'Ultimo accesso ieri alle 22:49',
          visible: true,
          messages: [
              {
                optionsDisplay: '',
                date: '20/03/2020',
                hour: '16:30',
                text: 'Ciao come stai?',
                status: 'sent'
              },
              {
                optionsDisplay: '',
                date: '20/03/2020',
                hour: '16:30',
                text: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
              },
              {
                optionsDisplay: '',
                date: '20/03/2020',
                hour: '16:35',
                text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
              }
          ],
        },
        {
          name: 'Carla',
          avatar: 'female1.jpg',
          lastEntry: 'Ultimo accesso il 10/04/2021 alle 09:12',
          visible: true,
          messages: [
              {
                optionsDisplay: '',
                date: '28/03/2020',
                hour: '10:10',
                text: 'La Marianna va in campagna',
                status: 'received'
              },
              {
                optionsDisplay: '',
                date: '28/03/2020',
                hour: '10:20',
                text: 'Sicura di non aver sbagliato chat?',
                status: 'sent'
              },
              {
                optionsDisplay: '',
                date: '28/03/2020',
                hour: '16:15',
                text: 'Ah scusa!',
                status: 'received'
              }
          ],
        },
        {
          name: 'Chiara',
          avatar: 'female2.png',
          lastEntry: 'oggi alle 08:35',
          visible: true,
          messages: [
              {
                optionsDisplay: '',
                date: '10/01/2020',
                hour: '15:30',
                text: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
              },
              {
                optionsDisplay: '',
                date: '10/01/2020',
                hour: '15:50',
                text: 'Si, ma preferirei andare al cinema',
                status: 'received'
              }
          ],
        },
    ]
      
    },

    methods: {

      messageGen: function(index) {

        this.activeUser = this.contacts[index];

        this.displayClass = 'display-none';
      },

      thisHour: function() {

        const current = new Date();
        const time = ('0' + current.getHours()).slice(-2) + ":" + ('0' + current.getMinutes()).slice(-2);

        return time
      },

      newMessageGen: function(message) {

        const time = this.thisHour();

        const newMessage = {
          optionsDisplay: '',
          date: '',
          hour: time,
          text: this.message,
          status: 'sent'
        };

        this.activeUser.messages.push(newMessage);
        this.message = '';

        const thisUser = this.activeUser;

        let defaultAnswere = {
          optionsDisplay: '',
          text: 'Ok',
          status: 'received',
          hour: ''
        };

        defaultAnswere.hour = time;

        setTimeout(() => {

          thisUser.lastEntry = 'Online';
          
        }, 1000);

        setTimeout(() => {

          thisUser.messages.push(defaultAnswere);
          
        }, 2000);

        setTimeout(() => {

          thisUser.lastEntry = 'Ultimo accesso oggi alle ' + time;
          
        }, 3000);

        console.log(this.activeUser.messages);

        
      },

      searchUser: function() {

        if (this.searchUsers == '') {
          
          this.contacts.forEach(contact => {
           
            contact['visible'] = true;
          });
        } else {

          this.contacts.forEach(contact => {

            const currentContact = contact['name'].toLowerCase();
            const currentUserSearch = this.searchUsers.toLowerCase();

            if (!currentContact.includes(currentUserSearch)) {
              
              contact['visible'] = false;
            } else {

              contact['visible'] = true;
            }
            
          });
        }
      },

      showOptions: function(index) {
        
        const messages = this.activeUser.messages;
        const message = messages[index];

        message.optionsDisplay = 'options-block';

        console.log(message);
      },

      deleteMessage: function(index) {
        const messages = this.activeUser.messages;
        const message = messages[index];

        message.optionsDisplay = '';
        message.text = 'Hai eliminato questo messaggio';
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', init);