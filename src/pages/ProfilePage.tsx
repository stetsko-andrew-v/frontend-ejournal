import '../css/profile.css'

const ProfilePage = () => {
    return (
        <div className="main">
            <div className="row">
                <div className="col m3 center">
                    <img src={'test/vsk.jpg'} className="profile-img"/>
                </div>
                <div className="col m9">
                    <p className="user-name">Вишковецький Кирил Андрійович</p>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;