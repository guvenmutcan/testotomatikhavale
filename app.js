const app = Vue.createApp({
    data() {
      return {
        name: '',
        surname: '',
        banks: [
          { name: 'Bank A', accountNumber: '12345678', iban: 'TR1111111111111' },
          { name: 'Bank B', accountNumber: '87654321', iban: 'TR2222222222222' },
          { name: 'Bank C', accountNumber: '19283746', iban: 'TR3333333333333' }
        ],
        selectedBank: null,
        bankSelected: false,
        countdown: 10
      }
    },
    methods: {
      onNameSubmit() {
        if (this.name && this.surname) {
          this.bankSelected = true;
        } else {
          alert('Lütfen isim ve soyisim alanlarını doldurunuz.');
        }
      },
      confirmBankSelection() {
        if (this.selectedBank) {
          this.bankSelected = true;
          this.startCountdown();
        } else {
          alert('Lütfen bir banka seçiniz.');
        }
      },
      onDeposit() {
        alert('Para yatırma işlemi başarıyla gerçekleştirildi.');
        this.selectedBank = null;
        this.bankSelected = false;
      },
      startCountdown() {
        let timer = setInterval(() => {
          this.countdown--;
          if (this.countdown === 0) {
            clearInterval(timer);
            this.countdown = 10;
            this.selectedBank = null;
            this.bankSelected = false;
          }
        }, 1000);
      }
    }
  });
  
  app.mount('#app');
  