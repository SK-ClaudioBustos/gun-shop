export const uid = (): string => {
    return Date.now().toString(36) + Math.random().toString(36);
}

export const formatTotal = (total: number): string => {
    const cadena = total.toString();
    if (cadena.length === 6) return cadena.slice(0, 3) + "." + cadena.slice(3, cadena.length);

    let aux = cadena;
    for (let i: number = cadena.length; i >= 0; i = i - 3) {
      if (i !== aux.length && i !== 0) aux = aux.slice(0, i) + "." + aux.slice(i, aux.length);
    }
    return aux;
}