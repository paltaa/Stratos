import React from 'react'
import News from '/imports/api/news/news'
import CollectionTable from '../../../components/collection-table.jsx'

export default class NewsList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selector: {},
      fields: ['title', 'body', 'createdBy']
    }
  }

  getSelector () {
    if (!this.state.filter) {
      return this.state.selector
    } else {
      const filters = this.state.fields.map((field) => {
        var obj = {}
        obj[field] = new RegExp(`${this.state.filter}.*`, 'i')
        return obj
      })
      return { $and: [{ $or: filters }, this.state.selector] }
    }
  }

  getOptions () {
    return {
      sort: this.state.sort,
      limit: this.state.itemsPerPage
    }
  }

  render () {
    return (
      <CollectionTable
        collection={News}
        publication='news-index'
        itemComponent={NewsIndexItem}
        filter={this.state.filter}
        fields={this.state.fields}
        headers={['Titulo', 'Cuerpo', {name: 'Acciones', styles: {width: '100px'}}]}
        selector={this.getSelector()}
        options={this.getOptions()} />
    )
  }
}

import {TableRow, TableRowColumn} from 'material-ui/Table'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton/IconButton'
import Divider from 'material-ui/Divider'
import Delete from 'material-ui/svg-icons/action/delete'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit'

const contextTypes = {
  userId: React.PropTypes.string,
  location: React.PropTypes.object,
  router: React.PropTypes.object
}

export class NewsIndexItem extends React.Component {
  handleDelete () {
    News.remove(this.props.item._id)
  }
  render () {
    return (
      <TableRow>
        <TableRowColumn>{this.props.item.title}</TableRowColumn>
        <TableRowColumn>{this.props.item.body}</TableRowColumn>
        <TableRowColumn style={{width: '100px'}}>
          <IconMenu
            style={{float: 'right'}}
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
          >
            <MenuItem primaryText='Editar' leftIcon={<ModeEdit />} onTouchTap={() => this.context.router.push(`/admin/news/update/${this.props.item._id}`)} />
            <Divider />
            <MenuItem primaryText='Borrar' leftIcon={<Delete />} onTouchTap={this.handleDelete.bind(this)} />
          </IconMenu>
        </TableRowColumn>
      </TableRow>
    )
  }
}

NewsIndexItem.contextTypes = contextTypes
