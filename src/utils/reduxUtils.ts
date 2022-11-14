// CREATE ACTIONS //

type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any
  ? A
  : never;

export function createAction<AT, F extends Function, P>(
  actionType: AT,
  callback?: F & ((...args: any) => P)
): (...T: ArgumentTypes<F>) => { type: AT; payload: P } {
  return (...T) => ({
    type: actionType,
    payload: callback?.(...T) ?? ({} as P),
  });
}

// CREATE ACTION TYPES //

type TypesObject<P extends string, T extends string> = {
  readonly [K in T]: `${P}${K}`;
};

export function createActionTypes<P extends string, T extends string>(
  prefix: P = "" as P,
  types: T[]
): TypesObject<P, T> {
  const typesObject: TypesObject<P, T> = Object.fromEntries(
    types.map((value) => [value, `${prefix}${String(value)}`])
  ) as unknown as TypesObject<P, T>;
  Object.freeze(typesObject);
  return typesObject;
}

// CREATE REDUCER //

type GenericType = string | symbol | number;

type Action<T> = {
  type: T;
  payload: any;
};

export function createReducer<S, AT extends GenericType>(
  initialState: S,
  actions: {
    [K in AT]: (state: S, action: Action<K>) => S;
  }
): (state: S, action: Action<AT>) => S {
  return function (state = initialState, action) {
    if (Object.prototype.hasOwnProperty.call(actions, action.type))
      return actions[action.type]?.(state, action);
    return state;
  };
}
