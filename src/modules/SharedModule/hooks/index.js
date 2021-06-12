import { useState, useEffect } from "react";

export const useAsyncEffect = (
  effect = async () => {
    return undefined;
  },
  afterEffect = () => {},
  deps = [],
  loadingEndCondition = true
) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    const asyncEffect = async () => {
      const data = await effect();
      if (mounted) {
        afterEffect(data);
        if (loadingEndCondition) {
          setLoading(false);
        }
      }
    };

    asyncEffect();
    return () => {
      mounted = false;
    };
  }, [...deps, effect, afterEffect, loadingEndCondition]);

  return loading;
};
