const subjects: string[] = ["Toán", "Văn", "Anh", "Hóa", "Sinh"];

const SubjectList = () => {
  return (
    <div style={{fontFamily: "sans-serif"}}>
      <h2> Danh sách môn học</h2>
      <div style={{ display: "flex", flexDirection: "column",gap: "10px"}}>
        {subjects.map((subject, index) => (
          <button key={index} style={{width: "200px", padding: "5px ", fontSize: "15px", borderRadius: "6px"}}>
            {subject}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SubjectList;
