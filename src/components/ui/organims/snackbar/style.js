const handleStyleSnackbar = (type) => {

  if (type === 'sucess') {
    return {
      backgroundColor: 'green',
    }
  }
  if (type === 'information') {
    return {
      backgroundColor: 'blue',
    }
  }
  if (type === 'warning') {
    return {
      backgroundColor: 'yellow',
      height: '200px'
    }
  }
  if (type === 'danger') {
    return {
      backgroundColor: 'red',
    }
  }
}
export default handleStyleSnackbar