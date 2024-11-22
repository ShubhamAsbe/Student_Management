import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  number: { type: String, required: true },
  gender: { type: String, required: true },
  tenthMarks: { type: Number, required: true },
  twelfthMarks: { type: Number, required: true },
  cetMarks: { type: Number, required: true },
  prn: { type: String, required: true, unique: true },
});

// Export the model using ES module syntax
export default mongoose.model('Student', studentSchema);
