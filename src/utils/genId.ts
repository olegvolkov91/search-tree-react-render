let num = 0;

export const genId = (_prefix = 'id_') => _prefix + ++num;
