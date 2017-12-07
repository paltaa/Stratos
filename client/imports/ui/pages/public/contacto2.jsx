import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Snackbar from 'material-ui/Snackbar'
// import { FlowRouter } from 'meteor/kadira:flow-router'
import autobind from 'autobind-decorator'
import { Meteor } from 'meteor/meteor'
import Loading from '../../components/loading'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import BigTitle from '../../components/big-title'
import Text from '../../components/text'
import Checkbox from 'material-ui/Checkbox'
//Checkbox styles here
const styles = {
  block: {
    maxWidth: 400,
  },
  checkbox: {
    marginBottom: 10,
  },
};


export default class Contact extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      subject: '',
      message: '',
      topic: props.motivo,
      open: false,
      loading: false
    }
  }

  // Snackbar Handlers
  @autobind
  handleRequestClose () {
    this.setState({
      open: false
    })
  }

  @autobind
  onSubmit () {
    this.setState({loading: true})
    Meteor.call('contactEmail', this.state, (error, response) => {
      if (error) {
        console.warn('error')
      }
      this.setState({email: '', subject: '', message: '', topic: '', open: true, loading: false})
    })
  }

  @autobind
  onChange (event) {
    var target = event.target
    var state = {}
    state[target.id] = target.value
    this.setState(state)
  }

  renderLoading () {
    if (this.state.loading) {
      return (
        <Loading size={59.5} />
      )
    }
  }


  render () {
    return (
      <div style={{ marginTop: '50px', marginBottom: 80}} className='container reactComponent'>
        {/* Title */}
        <BigTitle title='Sube tu CV' />
        <span style={{fontSize: '32px', fontWeight: '300'}}>
        <img src='/story.jpg' style={{padding: '0px 0px'}} />
        <BigTitle title='COMPLETA ESTE FORMULARIO Y TE AGREGAMOS A NUESTRA BBDD' small />
        </span>
        {/* Form */}
        <div style= {{padding: '30px 10px'}}>
          <div className='col-md-12'>
          <TextField
              floatingLabelText='Nombre'
              fullWidth
              id='nombre'
              value={this.state.nombre}
              onChange={this.onChange}
            /><br/>

            <TextField
              floatingLabelText='Apellidos'
              fullWidth
              id='Apellidos'
              value={this.state.apellidos}
              onChange={this.onChange}
            /><br/>

            <TextField
              floatingLabelText='Email'
              fullWidth
              id='email'
              type='email'
              value={this.state.email}
              onChange={this.onChange}
            /><br />

            <TextField
              floatingLabelText='Telefono'
              fullWidth
              id='telefono'
              value={this.state.telefono}
              onChange={this.onChange}
            /><br />

            <TextField
              floatingLabelText='Linkedin'
              fullWidth
              id='linkedin'
              value={this.state.linkedin}
              onChange={this.onChange}
            /><br />

            <TextField
              floatingLabelText='Empresa (actual o ultima)'
              fullWidth
              id='empresa'
              value={this.state.empresa}
              onChange={this.onChange}
            /><br />

            <TextField
              floatingLabelText='Cargo (actual o ultimo)'
              fullWidth
              id='cargo'
              value={this.state.cargo}
              onChange={this.onChange}
            /><br />

             <div style={{columnCount: '3'}}>
             <div style={styles.block}>
              <Checkbox label="Agricultura y Forestal"  style={styles.checkbox}/>
              <Checkbox label="Agua, Gas, Energia"  style={styles.checkbox}/>
              <Checkbox label="Organizaciones sin fines de lucro"  style={styles.checkbox}/>
              <Checkbox label="Construcción"  style={styles.checkbox}/>
              <Checkbox label="Consumo masivo: Alimentación"  style={styles.checkbox}/>
              <Checkbox label="Automotriz"  style={styles.checkbox}/>
              <Checkbox label="Consumo masivo: Bebidas"  style={styles.checkbox}/>
              <Checkbox label="Consumo masivo: Cuidado Personal"  style={styles.checkbox}/>
              <Checkbox label="Consumer Electronic"  style={styles.checkbox}/>
              <Checkbox label="Vestuario y Moda"  style={styles.checkbox}/>
              <Checkbox label="Educación Otros"  style={styles.checkbox}/>
              <Checkbox label="Capacitación"  style={styles.checkbox}/>
              <Checkbox label="Gobierno Central"  style={styles.checkbox}/>
              <Checkbox label="Gobierno Municipal"  style={styles.checkbox}/>
              <Checkbox label="Canal Horeca"  style={styles.checkbox}/>
              <Checkbox label="Lineas Areas"  style={styles.checkbox}/>
              <Checkbox label="Transporte y Logistica"  style={styles.checkbox}/>
              <Checkbox label="Turismo"  style={styles.checkbox}/>
              <Checkbox label="Inmobiliaria"  style={styles.checkbox}/>
              <Checkbox label="Laboratorios"  style={styles.checkbox}/>
              <Checkbox label="Medios"  style={styles.checkbox}/>
              <Checkbox label="Minería"  style={styles.checkbox}/>
              <Checkbox label="Industria"  style={styles.checkbox}/>
              <Checkbox label="Retail"  style={styles.checkbox}/>
              <Checkbox label="Salud"  style={styles.checkbox}/>
              <Checkbox label="Legal"  style={styles.checkbox}/>
              <Checkbox label="Servicios Contables"  style={styles.checkbox}/>
              <Checkbox label="Consultoría Recursos Humanos"  style={styles.checkbox}/>
              <Checkbox label="Consultoría de Negocios"  style={styles.checkbox}/>
              <Checkbox label="Ingeniería"  style={styles.checkbox}/>
              <Checkbox label="AFP e Isapres"  style={styles.checkbox}/>
              <Checkbox label="Bancos"  style={styles.checkbox}/>
              <Checkbox label="Bolsa de Valores"  style={styles.checkbox}/>
              <Checkbox label="Seguros"  style={styles.checkbox}/>
              <Checkbox label="Tecnología"  style={styles.checkbox}/>
              <Checkbox label="Telecomunicaciones"  style={styles.checkbox}/>
            
              </div>

          </div>
                      <SelectField
              floatingLabelText='Ultima area en la que trabajaste'
              id='area_madre'
              value={this.state.area_madre}
              onChange={(event, index, value) => this.setState({area: value})}
              fullWidth
            >
              <MenuItem value={'consultoria'} primaryText='Consultoria' />
              <MenuItem value={'finanzas'} primaryText='Finanzas' />
              <MenuItem value={'gerencias'} primaryText='Gerencias' />
              <MenuItem value={'legal'} primaryText='Legal' />
              <MenuItem value={'salud'} primaryText='Salud' />
              <MenuItem value={'operaciones'} primaryText='Operaciones' />
              <MenuItem value={'recursos_humanos'} primaryText='Recursos Humanos' />
              <MenuItem value={'comercial_marketing'} primaryText='Comercial y marketing' />
              <MenuItem value={'otros'} primaryText='Otros' />
              <MenuItem value={'tecnologia'} primaryText='Tecnologia' />
              <MenuItem value={'gobierno_corporativo'} primaryText='Gobierno Corporativo' />
            </SelectField>
          {/* if(area_madre==='consultoria'){

<Checkbox label="I"Auditor"style={styles.checkbox}/>
<Checkbox label="I"Consultor TI"style={styles.checkbox}/>
<Checkbox label="I"Contadores"style={styles.checkbox}/>
<Checkbox label="I"Impuestos"style={styles.checkbox}/>
<Checkbox label="I"Management"style={styles.checkbox}/>
<Checkbox label="I"Recursos Humanos"style={styles.checkbox}/>
*/}
            <RaisedButton label='Enviar' primary style={{marginTop: '30px', float: 'right'}} onTouchTap={this.onSubmit} />
            {this.renderLoading()}
        </div>
        </div>
        <Snackbar
          open={this.state.open}
          message='Mensaje enviado satisfactoriamente'
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    )
  }
}
