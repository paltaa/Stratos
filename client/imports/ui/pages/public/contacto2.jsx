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
    maxWidth: 500,
  },
  checkbox: {
    marginBottom: 20,
  },
};


//elementos del objeto industrias en checkboxes

const itemsIndustrias = [
"Agricultura y Forestal",
"Agua, Gas, Energia",
"Organizaciones sin fines de lucro",
"Construcción",
"Consumo masivo: Alimentación",
"Automotriz",
"Consumo masivo: Bebidas",
"Consumo masivo: Cuidado Personal",
"Consumer Electronic",
"Vestuario y Moda",
"Educación Otros",
"Capacitación",
"Gobierno Central",
"Gobierno Municipal",
"Canal Horeca",
"Lineas Areas",
"Transporte y Logistica",
"Turismo",
"Inmobiliaria",
"Laboratorios",
"Medios",
"Minería",
"Industria",
"Retail",
"Salud",
"Legal",
"Servicios Contables",
"Consultoría Recursos Humanos",
"Consultoría de Negocios",
"Ingeniería",
"AFP e Isapres",
"Bancos",
"Bolsa de Valores",
"Seguros",
"Tecnología",
"Telecomunicaciones"
]

//REVISAR ESTA MIERDA DE CLASE
/*

export class Checks extends React.Component {
 constructor (props) {
    super(props);


this.createCheckbox = this.createCheckbox().bind(this);

}
  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  }
  state = {
    isChecked: false,
  }

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  }
  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    for (const checkbox of this.selectedCheckboxes) {
      console.log(checkbox, 'is selected.');
    }
  }
  
  createCheckbox = label => (
    <Checkbox
            label={ label }
            handleCheckboxChange={this.toggleCheckbox}
            key={ label }
        />
  )

  createCheckboxes = () => {
    itemsIndustrias.map(this.createCheckbox)
  }
  
  //this.createCheckboxes() = this.createCheckboxes().bind(this);
}

Checks.propTypes = {
  boxes: React.PropTypes.array
}

*/
//FIN objeto CHECKBOX INDUSTRIAS


/*
export class AreaForm extends React.Component {
  constructor(props){
    super(props);
    this.DisplayChecks= this.DisplayChecks.bind(this);
  }


 DisplayChecks(area_madre){
  if(area_madre === 'consultoria'){
    return(
<Checkbox label="Auditor"  style={styles.checkbox}/>

/*"Consultor TI"
"Contadores"
"Impuestos"
"Management"
"Recursos Humanos"
      );
    }
  }
}
*/
export default class Contact extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      nombre: '',
      apellidos: '',
      email: '',
      telefono: '',
      linkedin: '',
      empresa: '',
      cargo: '',
      subject: '',
      message: '',
      area_madre: 'consultoria',
      area: '',
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
      this.setState({nombre: '', apellidos: '', email: '', telefono: '', linkedin: '', empresa: '',cargo: '', area: '' ,area_madre: '', open: true, loading: false})
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
              id='apellidos'
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
            />
            <br />
            <Text text="Industrias en las que has trabajado" style={{textAlign: 'left', padding: '0px 0px' }}  />
            <br />

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
              onChange={(event, index, value) => this.setState({area_madre: value})}
              fullWidth
            >
              <MenuItem value={'consultoria'} primaryText='Consultoria' />
              <MenuItem value={'finanzas'} primaryText='Finanzas' />
              <MenuItem value={'gerencias'} primaryText='Gerencias' />
              <MenuItem value={'legal'} primaryText='Legal' />
              <MenuItem value={'salud'} primaryText='Salud' />
              <MenuItem value={'operaciones'} primaryText='Operaciones' />
              <MenuItem value={'recursos humanos'} primaryText='Recursos Humanos' />
              <MenuItem value={'comercial marketing'} primaryText='Comercial y marketing' />
              <MenuItem value={'otros'} primaryText='Otros' />
              <MenuItem value={'tecnologia'} primaryText='Tecnologia' />
              <MenuItem value={'gobierno corporativo'} primaryText='Gobierno Corporativo' />
            </SelectField>

                   <SelectField
              floatingLabelText='Ultima area en la que trabajaste de'
              id='area'
              value={this.state.area}
              onChange={(event, index, value) => this.setState({area: value})}
              fullWidth
            >

            {DesplegarAreas(this.state.area_madre)}

                        </SelectField>


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






function DesplegarAreas(oki){
  if(oki === 'consultoria'){
    return (
      <div>

              <MenuItem value={'auditor'} primaryText='Auditor' />
              <MenuItem value={'consultor ti'} primaryText='Consultor Ti' />
              <MenuItem value={'contador'} primaryText='Contador' />
              <MenuItem value={'impuestos'} primaryText='Impuestos' />
              <MenuItem value={'management'} primaryText='Management' />
              <MenuItem value={'recursos humanos'} primaryText='Recursos Humanos' />
            </div>
      );
  }else if(oki === 'finanzas'){
    return(
           <div>
              <MenuItem value={'analista'} primaryText='Analista' />
            <MenuItem value={'auditoria'} primaryText='Auditoria' />
            <MenuItem value={'contabilidad'} primaryText='Contabilidad' />
            <MenuItem value={'controller'} primaryText='Controller' />
            <MenuItem value={'planificacion'} primaryText='Planificacion' />
            <MenuItem value={'riesgo'} primaryText='Riesgo' />
            <MenuItem value={'subegerencia finanzas'} primaryText='Subgerencia Finanzas' />
            <MenuItem value={'tesoreria'} primaryText='Tesoreria' />
            <MenuItem value={'investor relations'} primaryText='Investor Relations' />
            <MenuItem value={'control de gestion'} primaryText='Control de Gestion' />
            </div>

     );
  }else if(oki === 'gerencias'){
        return(
           <div>
            <MenuItem value={'gerente comercial'} primaryText='Gerente Comercial' />
            <MenuItem value={'gerente general'} primaryText='Gerente General' />
            <MenuItem value={'gerente administracion y finanzas'} primaryText='Gerente Administracion y Finanzas' />
            <MenuItem value={'gerente recursos humanos'} primaryText='Gerente Recursos Humanos' />
            <MenuItem value={'gerente tecnologia'} primaryText='Gerente Tecnologia' />
            <MenuItem value={'gerente marketing'} primaryText='Gerente Marketing' />
            <MenuItem value={'gerente operaciones'} primaryText='Gerente Operaciones' />
            </div>

     );


  }else if(oki === 'legal'){
        return(
           <div>

            <MenuItem value={'abogado'} primaryText='Abogado' />
            <MenuItem value={'asociado'} primaryText='Asociado' />
            <MenuItem value={'compilance'} primaryText='Compilance' />
            <MenuItem value={'fiscal'} primaryText='Fiscal' />
            <MenuItem value={'socio'} primaryText='Socio' />


            </div>

     );
  }else if(oki === 'salud'){
        return(
           <div>
            <MenuItem value={'direccion medica'} primaryText='Direccion Medica' />
            <MenuItem value={'pharma'} primaryText='Pharma' />
            </div>

     );
}else if(oki === 'otros'){
        return(
           <div>

<MenuItem value={'otros'} primaryText='otros' />
            </div>

     );
}else if(oki === 'tecnologia'){
        return(
           <div>

            <MenuItem value={'seguridad informatica'} primaryText='Seguridad Informatica' />
            <MenuItem value={'desarrollo'} primaryText='Desarrollo' />
            <MenuItem value={'digital'} primaryText='Digital' />
            <MenuItem value={'mobile'} primaryText='Mobile' />
            <MenuItem value={'proyectos ti'} primaryText='Proyectos Ti' />
            <MenuItem value={'sap y erp'} primaryText='SAP y ERP' />
            <MenuItem value={'soporte ti'} primaryText='Soporte TI' />
            </div>

     );




}else if(oki === 'gobierno corporativo'){
        return(
           <div>
            <MenuItem value={'socio'} primaryText='Socio' />
            <MenuItem value={'presidente ejecutivo'} primaryText='Presidente Ejecutivo' />
            <MenuItem value={'miembro del directorio'} primaryText='Miembro del Directorio' />
            </div>
     );

}
}
