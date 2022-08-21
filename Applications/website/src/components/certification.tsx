interface Props {
    certificate: Certificate;
}

export const Certification: React.FC<Props> = ({ certificate }) => {
    return (
        <div className="col-4 col-6-medium col-12-small">
            <article className="box style2">
                <h3>{certificate.name}</h3>
                <p>{certificate.fromDate} - {certificate.toDate}</p>
            </article>
        </div>
    )
}