import React, { useCallback, useRef, useState } from 'react';

export default function Immer() {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: '', username: '' });
  const [data, setData] = useState({
    array: [],
    uselessValue: null,
  });

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setForm(produce(from, (draft) => {
        draft[name] = value;
      }));
    },
    [form],
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username,
      };

      setData(
        produce(data, (draft) => {
          data.array.push(info);
        }),
      );

      setForm({
        name: '',
        username: '',
      });

      nextId.current += 1;
    },
    [data, form.name, form.username],
  );

  return (
    <div>
      <h6>Immer</h6>
    </div>
  );
}
