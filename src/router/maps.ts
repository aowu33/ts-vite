/**
 * name映射
 * 利用json对象下的key重名自检查机制防止路由中定义相同的name
 */
 const nameMaps: StringJson = {
    Login: 'Login',
    Equipment: 'Equipment',
    EquipmentTree: 'EquipmentTree',
    EquipmentUser: 'EquipmentUser',
    EquipmentOther: 'EquipmentOther',
    EquipmentPage1: 'EquipmentPage1',
    EquipmentPage2: 'EquipmentPage2',
    // EquipmentClasseditDetails: 'EquipmentClasseditDetails'
  }
  
  type StringJson = {
    [key: string]: string
  }
  
  export default nameMaps