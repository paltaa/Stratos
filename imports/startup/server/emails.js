import { Meteor } from 'meteor/meteor'
import { Email } from 'meteor/email'

process.env.MAIL_URL = 'smtp://'
process.env.MAIL_FROM = 'Leñeria <no-reply@leñeria.cl>'

Meteor.methods({
  contactEmail: function (data) {
    Meteor.defer(function () {
      try {
        Email.send({
          to: 'joaquin@pampa.store',
          cc: 'ignacio@pampa.store',
          from: data.email,
          subject: `Formulario de contacto: ${data.subject}`,
          text: `formulario de contacto: ${data.text}`
        })
      } catch (e) {
        console.log(e)
        console.log('de:', process.env.MAIL_FROM = 'no-reply@pampa.store')
      }
    })
  }
})
