function init() {
  
  new Vue({

    el: '#app',

    data: {

      searchUsers: '',

      activeUser: {},

      message: '',

      newMessage: {},

      defaultAnswere: {
        text: 'Ok',
        status: 'received'
      },

      displayClass: '',

      contacts: [
        {
          name: 'Marco',
          avatar: 'male1.png',
          lastEntry: 'oggi alle 06:50',
          visible: true,
          messages: [
            {
              date: '10/01/2020',
              hour: '15:30',
              text: 'Hai portato a spasso il cane?',
              status: 'sent'
            },
            {
              date: '10/01/2020',
              hour: '15:50',
              text: 'Ricordati di dargli da mangiare',
              status: 'sent'
            },
            {
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
          lastEntry: 'ieri alle 22:49',
          visible: true,
          messages: [
              {
                date: '20/03/2020 16:30',
                text: 'Ciao come stai?',
                status: 'sent'
              },
              {
                date: '20/03/2020 16:30',
                text: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
              },
              {
                date: '20/03/2020 16:35',
                text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
              }
          ],
        },
        {
          name: 'Carla',
          avatar: 'female1.jpg',
          lastEntry: 'il 10/04/2021 alle 09:12',
          visible: true,
          messages: [
              {
                date: '28/03/2020 10:10',
                text: 'La Marianna va in campagna',
                status: 'received'
              },
              {
                date: '28/03/2020 10:20',
                text: 'Sicura di non aver sbagliato chat?',
                status: 'sent'
              },
              {
                date: '28/03/2020 16:15',
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
                date: '10/01/2020 15:30',
                text: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
              },
              {
                date: '10/01/2020 15:50',
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

      newMessageGen: function(message) {

        this.newMessage = {text: this.message, status: 'sent'};

        this.activeUser.messages.push(this.newMessage);
        this.message = '';

        setTimeout(() => {

          this.activeUser.messages.push(this.defaultAnswere);
          
        }, 1000);
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
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', init);