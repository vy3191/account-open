import { useSelector } from 'react-redux';
import { Card } from 'components';
import { LABELS } from './constants';

let ReviewAndEditContainer = (props) => {
  const { applicationData } = useSelector(state => state.applicationReducer);  

  const formattedData = Object.keys(applicationData)
      .filter(item => item !== 'id')
      .map(item => {
        const response = applicationData[item],
              reviewLabel = LABELS[item],
              obj = {
                editPath: reviewLabel.routeKey,
                title: reviewLabel.titleKey
              };             

        Object.keys(response).forEach(key => (obj[reviewLabel[key]] = response[key]));
        return obj;
      });     
   
  return formattedData.map( (item, index) => <Card key={ index } data={ item } />);
}

export default ReviewAndEditContainer;
