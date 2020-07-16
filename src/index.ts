import { User } from './User'
import { CustomMap } from './CustomMap'
import { Company } from './Company'

const customMap = new CustomMap('map')
const company = new Company()
const user = new User()

customMap.addMarker(user)
customMap.addMarker(company)