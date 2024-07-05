function roundToNext5(n){
    if (n < 0) return n - (n % -5 == 0 ? 0 : n % 5)
    if (n > 0) return n + (n % 5 == 0 ? 0 : 5 - n % 5)
    return 0
  }