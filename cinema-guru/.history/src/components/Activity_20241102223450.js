import './components.css';

const Activity = ({activity}) => {
	return (
		<li className='activity'>
			<p>
				<b>{activity.user.name}</b> {activity.action} <b>{activity.subject.name}</b> to
				<b>{activity.object.name}</b> - {activity.created_at}
			</p>
		</li>
	);
}

export default Activity;
