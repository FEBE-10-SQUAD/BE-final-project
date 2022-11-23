const Profile = require("../model/profile.model");
const cloudinary = require("../cloudinaries/cloudinary");
const { Payload } = require("../templates/response");

const handleProfileUpdate = async (req, res, next) => {

    try {

        const { id } = req.params;

        const {
            username,
            nama,
            kota,
            alamat,
            tanggal_lahir,
            no_handphone,
            about_me,
            bookmark
        } = req.body;

        const document = req.file;

        const getUserDataById = await Profile.findById(id);

        if (getUserDataById.id == id) {

            let documents = "";

            if (document) {
                const fileBase64 = document.buffer.toString("base64");
                const file = `data:${document.mimetype};base64,${fileBase64}`;
                const cloudinaryDocuments = await cloudinary.uploader.upload(file);
                documents = cloudinaryDocuments.url;
            } else {
                documents = getUserDataById.document;
            }

            const updatedUserProfile = await Profile.updateOne(
                { id },
                {
                    username,
                    nama,
                    kota,
                    alamat,
                    tanggal_lahir,
                    no_handphone,
                    about_me,
                    bookmark,
                    document: documents
                }
            );

            return res.status(201).send(
                Payload(201, "Data updated sucessfully", {
                    updatedUserProfile: updatedUserProfile.modifiedCount,
                })
            );

        }

    } catch (err) {
        return res.status(500).send(Payload(500, "Internal server error", err));
    }

};

module.exports = { handleProfileUpdate };