function init() {
  
  new Vue({

    el: '#app',

    data: {

      searchUsers: '',

      activeUser: {},

      message: '',

      displayClass: '',

      lastMessage: '',

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
              status: 'sent',
              deleted: false
            },
            {
              optionsDisplay: '',
              date: '10/01/2020',
              hour: '15:50',
              text: 'Ricordati di dargli da mangiare',
              status: 'sent',
              deleted: false
            },
            {
              optionsDisplay: '',
              date: '10/01/2020',
              hour: '16:15',
              text: 'Tutto fatto!',
              status: 'received',
              deleted: false
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
                status: 'sent',
                deleted: false
              },
              {
                optionsDisplay: '',
                date: '20/03/2020',
                hour: '16:30',
                text: 'Bene grazie! Stasera ci vediamo?',
                status: 'received',
                deleted: false
              },
              {
                optionsDisplay: '',
                date: '20/03/2020',
                hour: '16:35',
                text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent',
                deleted: false
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
                status: 'received',
                deleted: false
              },
              {
                optionsDisplay: '',
                date: '28/03/2020',
                hour: '10:20',
                text: 'Sicura di non aver sbagliato chat?',
                status: 'sent',
                deleted: false
              },
              {
                optionsDisplay: '',
                date: '28/03/2020',
                hour: '16:15',
                text: 'Ah scusa!',
                status: 'received',
                deleted: false
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
                status: 'sent',
                deleted: false
              },
              {
                optionsDisplay: '',
                date: '10/01/2020',
                hour: '15:50',
                text: 'Si, ma preferirei andare al cinema',
                status: 'received',
                deleted: false
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

      thisDate: function() {
        const current = new Date();
        const date = ('0' + current.getDate()).slice(-2) + '/'
                      + ('0' + current.getMonth()).slice(-2) + '/'
                      + current.getFullYear() + ' ';
        
        return date;
      },

      thisHour: function() {

        const current = new Date();
        const time = ('0' + current.getHours()).slice(-2) + ":" 
                      + ('0' + current.getMinutes()).slice(-2);

        return time
      },

      defaultAnswereGen: function() {

        const thisUser = this.activeUser;
        const time = this.thisHour();
        const date = this.thisDate();

        const defaultAnswere = {
          optionsDisplay: '',
          date: date,
          hour: time,
          text: 'Ok',
          status: 'received',
          deleted: false
        };

        setTimeout(() => {

          thisUser.lastEntry = 'Online';
          
        }, 1000);

        setTimeout(() => {

          thisUser.messages.push(defaultAnswere);
          
        }, 2000);

        setTimeout(() => {

          thisUser.lastEntry = 'Ultimo accesso oggi alle ' + time;
          
        }, 3000);      
      },

      newMessageGen: function() {

        const time = this.thisHour();
        const date = this.thisDate();

        const newMessage = {
          optionsDisplay: '',
          date: date,
          hour: time,
          text: this.message,
          status: 'sent',
          deleted: false
        };

        this.activeUser.messages.push(newMessage);
        this.message = '';

        this.defaultAnswereGen();
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

        messages.forEach(message => {
           
          message.optionsDisplay = '';
        });

        message.optionsDisplay = 'options-block';
      },

      deleteMessage: function(index) {
        const messages = this.activeUser.messages;
        const message = messages[index];

        message.optionsDisplay = '';
        message.deleted = true;
        message.text = 'Hai eliminato questo messaggio';
      }
    },
    
  });
}

document.addEventListener('DOMContentLoaded', init);