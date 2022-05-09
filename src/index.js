const getHumanReadableSizeObject = (bytes) => {
    if (bytes === 0) {
      return {
        size: 0,
        measure: 'Bytes'
      }
    }
  
    const K = 1024
    const MEASURE = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    const i = Math.floor(Math.log(bytes) / Math.log(K))
  
    return {
      size: parseFloat((bytes / Math.pow(K, i)).toFixed(2)),
      measure: MEASURE[i]
    }
  }
  console.log(getHumanReadableSizeObject(1064))