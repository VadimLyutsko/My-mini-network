
import styles from './users.module.css'


const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                img: 'https://avatars.mds.yandex.net/get-zen_doc/98165/pub_5d96350ebc251400b0dd71b7_5d964432e6e8ef00b1b9d479/scale_1200',
                fullName: 'Vadim',
                status: 'Hi, beach!',
                followed: false,
                location: { country: 'Belarus', city: 'Minsk' }
            },
            {
                id: 2,
                img: 'https://avatars.mds.yandex.net/get-zen_doc/98165/pub_5d96350ebc251400b0dd71b7_5d964432e6e8ef00b1b9d479/scale_1200',
                fullName: 'Viktor',
                status: 'AAA',
                followed: true,
                location: { country: 'Russia', city: 'Moskow' }
            },
            {
                id: 3, img: 'https://avatars.mds.yandex.net/get-zen_doc/98165/pub_5d96350ebc251400b0dd71b7_5d964432e6e8ef00b1b9d479/scale_1200',
                fullName: 'Sindi',
                status: 'Who are you???',
                followed: false,
                location: { country: 'USA', city: 'New-York' }
            }
        ])
    }

    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div><img src={u.img} alt=""
                        className={styles.userPhoto} /></div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>UNFOLLOW</button >
                            : <button onClick={() => { props.follow(u.id) }}>FOLLOW</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}

export default Users;


