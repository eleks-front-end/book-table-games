import React from 'react';

class UsersAutocomplete extends React.Component {
    componentDidMount () {
        const { participantsSelect } = this;
        const formatRepo = user => user.loading ? user.text : `<div>${user.id}</div>`;
        const formatRepoSelection = user => user.id || user.text;

        if ($.fn.select2) {
            $(participantsSelect).select2({
                ajax: {
                    url: `${process.env.REACT_APP_WEBAPI_URL}users`,
                    dataType: 'json',
                    delay: 300,
                    data: params => ({
                        q: params.term
                    }),
                    processResults: data => ({
                        results: data.Resources
                    }),
                    cache: true
                },
                minimumInputLength: 4,
                escapeMarkup: markup => markup,
                templateResult: formatRepo, // omitted for brevity, see the source of this page
                templateSelection: formatRepoSelection,
                theme: 'bootstrap'
            });
        }
    }

    render () {
        return (
            <select ref={input => this.participantsSelect = input} className="form-control"
                    data-placeholder="Search by user" multiple>
            </select>
        );
    }
}

export default UsersAutocomplete;
