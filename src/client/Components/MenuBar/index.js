import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useFetch from '../../CustomHooks/useFetch';
import { API_PROXY } from '../../Utils/constants';
import Dietary from '../CommonComponent/dietary';
import actions from '../../store/actions';

export default (props) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const data = useFetch(`${API_PROXY}/api/items?name=${input}`, 'GET');
  const preview = useSelector((state) => state.preview);

  return (
    <div className="col-4">
      <div className="filters">
        <input className="form-control" placeholder="Type Name to filter" onChange={(e) => setInput(e.target.value)} />
      </div>
      <ul className="item-picker">
        {
          data && data.map(d => {
            return (
              <li className="item" key={d.id} type="submit" onClick={
                () => dispatch(actions.AddPreview(d))
              }>
                <h2>{d.name}</h2>
                <Dietary name={d.dietaries} />
              </li>
            )
          })
        }
      </ul>
    </div>
  );

}
