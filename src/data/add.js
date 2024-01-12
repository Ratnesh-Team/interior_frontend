<div className="mt-4">
        {Object.keys(data[0]).map((column) => (
          <input
            key={column}
            type="text"
            placeholder={`Enter ${column}...`}
            className="p-2 border rounded mr-2"
            value={column === 'Project Name' ? newProjectName : column === 'Phase' ? newPhase : newManage}
            onChange={(e) => {
              if (column === 'Project Name') setNewProjectName(e.target.value);
              else if (column === 'Phase') setNewPhase(e.target.value);
              else setNewManage(e.target.value);
            }}
          />
        ))}
        <button
          className="p-2 bg-green-500 text-white"
          onClick={handleAdd}
        >
          Add
        </button>
        <button
          className="p-2 bg-red-500 text-white ml-2"
          onClick={handleRemoveSelected}
        >
          Remove Selected
        </button>
      </div>