import { Meteor } from 'meteor/meteor'
import { Email } from 'meteor/email'

process.env.MAIL_URL = 'smtp://AKIAIVEXGZK56QLH7KHA:Av77XjcYLVcW1P%2FKIFsdpLdEcnmalZGzFFygAzetS92p@email-smtp.us-east-1.amazonaws.com:465'
process.env.MAIL_FROM = 'Leñeria <francisco@ab-aa.com>'

Meteor.methods({
  contactEmail: function (data) {
    Meteor.defer(function () {
      try {
        Email.send({
          to: 'info@centroleneria.cl',
          cc: '',
          from: process.env.MAIL_FROM,
          subject: `Formulario de contacto: ${data.subject}`,
          text: `formulario de contacto: ${data.message} ------- email contacto: ${data.email}`
        })
      } catch (e) {
        console.log(e)
        console.log('de:', process.env.MAIL_FROM)
      }
    })
  }
})
